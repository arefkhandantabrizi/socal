import gsap from "@/utils/gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const useTextTag = () => {
  const dotRef = useRef<HTMLSpanElement | null>(null);
  const dotRef2 = useRef<HTMLSpanElement | null>(null);
  const dotRef3 = useRef<HTMLSpanElement | null>(null);
  const dotContainerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const dot = dotRef.current;
      const dot2 = dotRef2.current;
      const dot3 = dotRef3.current;

      if (!dot || !dot2 || !dot3) return;

      const dots = [dot, dot2, dot3];

      gsap.set(dots, {
        backgroundColor: "#3f5558",
        opacity: 0.55,
      });

      dots.forEach((dot, index) => {
        gsap.fromTo(
          dot,
          {
            backgroundColor: "#3f5558",
            opacity: 0.55,
          },
          {
            backgroundColor: "#00f2ff",
            opacity: 1,
            duration: 1.6,
            delay: index * 0.45,
            repeat: -1,
            repeatDelay: 1.2,
            yoyo: true,
            ease: "sine.inOut",
          },
        );
      });
    },
    {
      scope: dotContainerRef,
    },
  );

  return {
    dotRef,
    dotRef2,
    dotRef3,
    dotContainerRef,
  };
};

export default useTextTag;
