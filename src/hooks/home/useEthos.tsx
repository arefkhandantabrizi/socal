import { useRef, useState } from "react";
import gsap from "@/utils/gsap";
import { useGSAP } from "@gsap/react";

type ActiveCursor = "cmd1" | "cmd2" | 0 | 1 | 2 | null;

const TYPE_SPEED = 0.01;

const TEXT = {
  command1: "RUN SOCAL_Power_Grid.exe",
  line1: "Initializing hardware handshake... [SUCCESS]",
  line2:
    "Scanning department nodes... Computer(OK), Electrical(COMING SOON), Calibration(COMING SOON)",
  command2: "DEPLOY infrastructure",
  line3: "waiting for architectural sign-off",
} as const;

const getTypeDuration = (text: string) => text.length * TYPE_SPEED;

const useEthos = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const commandRef = useRef<HTMLDivElement | null>(null);
  const commandRef2 = useRef<HTMLDivElement | null>(null);
  const linesRef = useRef<HTMLDivElement[]>([]);
  const progressRef = useRef<HTMLDivElement | null>(null);
  const chevron1Ref = useRef<HTMLSpanElement | null>(null);
  const chevron2Ref = useRef<HTMLSpanElement | null>(null);

  const [activeCursor, setActiveCursor] = useState<ActiveCursor>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      const command = commandRef.current;
      const command2 = commandRef2.current;
      const line1 = linesRef.current[0];
      const line2 = linesRef.current[1];
      const line3 = linesRef.current[2];
      const progress = progressRef.current;
      const chevron1 = chevron1Ref.current;
      const chevron2 = chevron2Ref.current;

      if (
        !container ||
        !command ||
        !command2 ||
        !line1 ||
        !line2 ||
        !line3 ||
        !progress ||
        !chevron1 ||
        !chevron2
      ) {
        return;
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          once: true,
        },
      });

      tl.from(container, {
        opacity: 0,
        y: 40,
        duration: 0.5,
        ease: "power4.inOut",
      })
        .to(chevron1, {
          opacity: 1,
          duration: 0.2,
        })
        .call(() => setActiveCursor("cmd1"))
        .to(command, {
          text: TEXT.command1,
          duration: getTypeDuration(TEXT.command1),
          ease: "none",
        })
        .call(() => setActiveCursor(0))
        .to(line1, {
          text: TEXT.line1,
          duration: getTypeDuration(TEXT.line1),
          ease: "none",
        })
        .call(() => setActiveCursor(1))
        .to(line2, {
          text: TEXT.line2,
          duration: getTypeDuration(TEXT.line2),
          ease: "none",
        })
        .to(chevron2, {
          opacity: 1,
          duration: 0.2,
        })
        .call(() => setActiveCursor("cmd2"))
        .to(command2, {
          text: TEXT.command2,
          duration: getTypeDuration(TEXT.command2),
          ease: "none",
        })
        .call(() => setActiveCursor(2))
        .to(line3, {
          text: TEXT.line3,
          duration: getTypeDuration(TEXT.line3),
          ease: "none",
        })
        .to(
          progress,
          {
            scaleX: 0.4,
            duration: 2,
            ease: "power4.inOut",
            transformOrigin: "left",
          },
          "<",
        )
        .call(() => setActiveCursor(null));
    },
    {
      scope: containerRef,
    },
  );

  return {
    containerRef,
    commandRef,
    commandRef2,
    linesRef,
    progressRef,
    activeCursor,
    chevron1Ref,
    chevron2Ref,
  };
};

export default useEthos;
