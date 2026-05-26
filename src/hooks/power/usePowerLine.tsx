import { useRef } from "react";
import gsap from "@/utils/gsap";
import { useGSAP } from "@gsap/react";

const usePowerLine = () => {
  const lineRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const line = lineRef.current;
      const section = sectionRef.current;

      if (!line || !section) return;

      const tween = gsap.fromTo(
        line,
        {
          y: 0,
          opacity: 1,
        },
        {
          y: () => section.offsetHeight - line.offsetHeight,
          opacity: 0.4,
          ease: "none",
          duration: 2.5,
          repeat: -1,
          repeatRefresh: true,
        },
      );

      return () => {
        tween.kill();
      };
    },
    { scope: sectionRef },
  );

  return { lineRef, sectionRef };
};

export default usePowerLine;
