import gsap from "@/utils/gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const useEthosText = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      if (!container) return;

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
        duration: 0.8,
        ease: "power4.inOut",
      });
    },
    { scope: containerRef },
  );

  return { containerRef };
};

export default useEthosText;
