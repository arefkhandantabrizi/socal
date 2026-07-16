import gsap from "@/utils/gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const useTransmissionAnimation = () => {
  const containerRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const container = containerRef.current;

      if (!container) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          end: "bottom 30%",
          once: true,
        },
      });
      tl.fromTo(
        container,
        {
          opacity: 0,
          y: 120,
          scale: 0.8,
        },
        { opacity: 1, y: 0, scale: 1, ease: "power4.inOut", duration: 1.3 },
      );
    },
    { scope: containerRef },
  );

  return { containerRef };
};

export default useTransmissionAnimation;
