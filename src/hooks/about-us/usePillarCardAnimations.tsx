import gsap from "@/utils/gsap";
import { useRef } from "react";

const usePillarCardAnimations = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const outerContainerRef = useRef<HTMLElement | null>(null);

  const onMouseEnter = () => {
    if (!containerRef.current) return;

    gsap.to(containerRef.current, {
      backgroundColor: "rgba(28,32,36,0.4)",
      border: "1px solid #173138",
      duration: 0.2,
      ease: "none",
    });
  };
  const onMouseLeave = () => {
    if (!containerRef.current) return;

    gsap.to(containerRef.current, {
      backgroundColor: "transparent",
      border: "none",
      duration: 0.2,
      ease: "none",
    });
  };

  return {
    outerContainerRef,
    containerRef,
    onMouseEnter,
    onMouseLeave,
  };
};

export default usePillarCardAnimations;
