import gsap from "@/utils/gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const useIntroAnimation = () => {
  const containerRef = useRef<HTMLElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      const text = textRef.current;
      const image = imageRef.current;

      if (!container || !text || !image) return;

      gsap.fromTo(
        image,
        {
          opacity: 0,
          y: 120,
          scale: 0.92,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.4,
          ease: "expo.out",
        },
      );

      gsap.fromTo(
        text,
        {
          opacity: 0,
          x: 120,
          scale: 0.92,
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1.4,
          delay: 0.5,
          ease: "expo.out",
        },
      );
    },
    { scope: containerRef },
  );

  return { containerRef, imageRef, textRef };
};

export default useIntroAnimation;
