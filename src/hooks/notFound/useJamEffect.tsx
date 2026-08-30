import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const GLITCH_CHARS = "!<>-_\\/[]{}—=+*^?#@$%01";

function randomGlitchChar() {
  return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
}

function pickUniqueIndices(count: number, howMany: number) {
  const pool = Array.from({ length: count }, (_, i) => i);
  const picked: number[] = [];
  while (picked.length < howMany && pool.length > 0) {
    const idx = Math.floor(Math.random() * pool.length);
    picked.push(pool.splice(idx, 1)[0]);
  }
  return picked;
}

function runScanSweep(
  sharpLayer: HTMLElement,
  scanLine: HTMLElement,
  bandPercent: number,
) {
  const reverse = Math.random() > 0.5;
  const state = { p: reverse ? 1 + bandPercent / 100 : -bandPercent / 100 };
  const target = reverse ? -bandPercent / 100 : 1 + bandPercent / 100;

  return gsap.to(state, {
    p: target,
    duration: gsap.utils.random(1, 1.8),
    ease: "power1.inOut",
    onUpdate: () => {
      const top = Math.max(0, Math.min(100, state.p * 100 - bandPercent / 2));
      const bottom = Math.max(
        0,
        Math.min(100, 100 - (state.p * 100 + bandPercent / 2)),
      );
      sharpLayer.style.clipPath = `inset(${top}% 0 ${bottom}% 0)`;
      scanLine.style.transform = `translateY(${state.p * 100}%)`;
      scanLine.style.height = `${Math.max(2, bandPercent * 0.4)}px`;

      // Bell-curve fade so the line is only faintly visible mid-sweep
      const inRange = state.p >= 0 && state.p <= 1;
      const fade = inRange ? Math.sin(Math.PI * state.p) : 0;
      scanLine.style.opacity = String(fade * 0.25);
    },
  });
}

function runJamBurst(blurChars: HTMLElement[], sharpChars: HTMLElement[]) {
  const howMany = Math.random() > 0.75 ? 2 : 1;
  const indices = pickUniqueIndices(blurChars.length, howMany);

  indices.forEach((i) => {
    const original = blurChars[i].textContent ?? "";
    const flickers = 3 + Math.floor(Math.random() * 3);
    const tl = gsap.timeline();

    for (let f = 0; f < flickers; f++) {
      tl.call(() => {
        const glitch = randomGlitchChar();
        blurChars[i].textContent = glitch;
        sharpChars[i].textContent = glitch;
      }).to([blurChars[i], sharpChars[i]], {
        duration: 0.045,
        x: gsap.utils.random(-2, 2),
        opacity: gsap.utils.random(0.7, 1),
      });
    }

    tl.call(() => {
      blurChars[i].textContent = original;
      sharpChars[i].textContent = original;
    }).to([blurChars[i], sharpChars[i]], {
      duration: 0.08,
      x: 0,
      opacity: 1,
    });
  });
}

export function useRadarJamEffect(
  text: string,
  options?: {
    bandPercentRange?: [number, number];
    scanDelayRange?: [number, number];
    jamDelayRange?: [number, number];
  },
) {
  const bandPercentRange = options?.bandPercentRange ?? [6, 30];
  const scanDelayRange = options?.scanDelayRange ?? [1.5, 4];
  const jamDelayRange = options?.jamDelayRange ?? [1, 3];

  const containerRef = useRef<HTMLDivElement>(null);
  const sharpLayerRef = useRef<HTMLDivElement>(null);
  const scanLineRef = useRef<HTMLDivElement>(null);
  const blurCharRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const sharpCharRefs = useRef<Array<HTMLSpanElement | null>>([]);

  const setBlurCharRef = (index: number) => (el: HTMLSpanElement | null) => {
    blurCharRefs.current[index] = el;
  };
  const setSharpCharRef = (index: number) => (el: HTMLSpanElement | null) => {
    sharpCharRefs.current[index] = el;
  };

  useGSAP(
    () => {
      const blurChars = blurCharRefs.current.filter(Boolean) as HTMLElement[];
      const sharpChars = sharpCharRefs.current.filter(Boolean) as HTMLElement[];
      const sharpLayer = sharpLayerRef.current;
      const scanLine = scanLineRef.current;
      if (!sharpLayer || !scanLine || blurChars.length === 0) return;

      let active = true;
      let pendingScan: gsap.core.Tween | null = null;
      let pendingJam: gsap.core.Tween | null = null;

      const scheduleScan = () => {
        if (!active) return;
        pendingScan = gsap.delayedCall(
          gsap.utils.random(...scanDelayRange),
          () => {
            const bandPercent = gsap.utils.random(...bandPercentRange);
            const sweep = runScanSweep(sharpLayer, scanLine, bandPercent);
            sweep.eventCallback("onComplete", scheduleScan);
          },
        );
      };

      const scheduleJam = () => {
        if (!active) return;
        pendingJam = gsap.delayedCall(
          gsap.utils.random(...jamDelayRange),
          () => {
            runJamBurst(blurChars, sharpChars);
            scheduleJam();
          },
        );
      };

      scheduleScan();
      scheduleJam();

      return () => {
        active = false;
        pendingScan?.kill();
        pendingJam?.kill();
      };
    },
    { scope: containerRef, dependencies: [text] },
  );

  return {
    containerRef,
    sharpLayerRef,
    scanLineRef,
    setBlurCharRef,
    setSharpCharRef,
  };
}
