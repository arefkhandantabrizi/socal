import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import TextPlugin from "gsap/TextPlugin";

gsap.registerPlugin(useGSAP, ScrollTrigger, TextPlugin);

const useEthos = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const commandRef = useRef<HTMLDivElement | null>(null);
  const commandRef2 = useRef<HTMLDivElement | null>(null);
  const linesRef = useRef<HTMLDivElement[]>([]);
  const progressRef = useRef<HTMLDivElement | null>(null);
  const [activeCursor, setActiveCursor] = useState<
    "cmd1" | "cmd2" | 0 | 1 | 2 | null
  >(null);

  const text = "RUN SOCAL_Power_Grid.exe";
  const text1 = "Initializing hardware handshake... [SUCCESS]";
  const text2 =
    "Scanning department nodes... Computer(OK), Electrical(COMING SOON)";
  const text3 = "DEPLOY infrastructure";
  const text4 = "waiting for architectural sign-off";

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 100%",
          end: "bottom 40%",
        },
      });

      tl.from(containerRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.5,
      });
      tl.call(() => setActiveCursor("cmd1"));
      tl.to(commandRef.current, {
        text: text,
        duration: text.length * 0.01,
        ease: "none",
      });
      tl.call(() => setActiveCursor(0));
      tl.to(linesRef.current[0], {
        text: text1,
        duration: text1.length * 0.01,
        // delay: text.length * 0.1,
        ease: "none",
      });
      tl.call(() => setActiveCursor(1));
      tl.to(linesRef.current[1], {
        text: text2,
        duration: text2.length * 0.01,
        ease: "none",
      });
      tl.call(() => setActiveCursor("cmd2"));
      tl.to(commandRef2.current, {
        text: text3,
        duration: text3.length * 0.01,
        ease: "none",
      });
      tl.call(() => setActiveCursor(2));
      tl.to(linesRef.current[2], {
        text: text4,
        duration: text4.length * 0.01,
        ease: "none",
      });
      tl.fromTo(
        progressRef.current,
        { scaleX: 0 },
        {
          scaleX: 0.4,
          duration: 2,
          ease: "power2.out",
          transformOrigin: "left",
        },
        "<",
      );
    },
    { scope: containerRef },
  );

  return {
    containerRef,
    commandRef,
    commandRef2,
    linesRef,
    progressRef,
    activeCursor,
  };
};

export default useEthos;
