import gsap from "@/utils/gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const useServicesAnimation = () => {
  const containerRef = useRef<HTMLElement | null>(null);
  const cardContainerRef = useRef<HTMLDivElement | null>(null);
  const cardRef0 = useRef<HTMLDivElement | null>(null);
  const cardRef1 = useRef<HTMLDivElement | null>(null);
  const cardRef2 = useRef<HTMLDivElement | null>(null);
  const cardRef3 = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      const cardContainer = cardContainerRef.current;
      const card0 = cardRef0.current;
      const card1 = cardRef1.current;
      const card2 = cardRef2.current;
      const card3 = cardRef3.current;

      if (!container || !card0 || !card1 || !card2 || !card3 || !cardContainer)
        return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top 70%",
          once: true,
        },
      });

      tl.fromTo(
        [card0, card1, card2, card3],
        {
          opacity: 0,
          y: 120,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.4,
          ease: "expo.inOut",
        },
      );
    },
    { scope: containerRef },
  );

  return {
    containerRef,
    cardContainerRef,
    cardRef0,
    cardRef1,
    cardRef2,
    cardRef3,
  };
};

export default useServicesAnimation;
