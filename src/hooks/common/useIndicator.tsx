import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "@/utils/gsap";

const useIndicator = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const indicatorRef = useRef<HTMLSpanElement | null>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      const indicator = indicatorRef.current;

      if (!container || !indicator) return;

      gsap.to(indicator, {
        opacity: 0.25,
        scale: 0.75,
        duration: 0.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    },
    { scope: containerRef },
  );

  return { containerRef, indicatorRef };
};

export default useIndicator;
