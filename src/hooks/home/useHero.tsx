import { useRef } from "react";
import gsap from "@/utils/gsap";
import { useGSAP } from "@gsap/react";

const useHero = () => {
  const rootRef = useRef<HTMLElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const badgeRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const image = imageRef.current;
      const badge = badgeRef.current;
      const text = textRef.current;

      if (!image || !badge || !text) return;

      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      tl.fromTo(
        image,
        { x: -500, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.1 },
      )
        .fromTo(
          text,
          { x: 120, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.8 },
          "-=0.2",
        )
        .fromTo(
          badge,
          { opacity: 0, y: -20 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.4",
        );
    },
    {
      scope: rootRef,
    },
  );

  return {
    rootRef,
    imageRef,
    badgeRef,
    textRef,
  };
};

export default useHero;
