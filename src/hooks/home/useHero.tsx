import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

const useHero = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const containerRefBadge = useRef<HTMLDivElement | null>(null);
  const containerRefText = useRef<HTMLDivElement | null>(null);
  useGSAP(() => {
    const el = containerRef.current;
    const elBadge = containerRefBadge.current;
    const elText = containerRefText.current;
    if (!el || !elBadge || !elText) return;

    gsap.fromTo(
      el,
      {
        x: "-500",
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
      },
    );

    gsap.fromTo(
      elBadge,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 1.2,
        duration: 1,
        ease: "power4.inOut",
      },
    );
    gsap.fromTo(
      elText,
      {
        x: 120,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power4.inOut",
      },
    );
  });
  return { containerRef, containerRefBadge, containerRefText };
};

export default useHero;
