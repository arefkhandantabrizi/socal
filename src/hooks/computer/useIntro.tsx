import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

const useIntro = () => {
  const refImageContainer = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (!refImageContainer.current) return;

    gsap.fromTo(
      refImageContainer.current,
      {
        opacity: 0,
        y: 80,
        scale: 0.9,
        boxShadow: "0 0 0 rgba(0,242,255,0)",
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        boxShadow: "-1.5rem 0.9rem 2.6rem -0.6rem rgba(0,242,255,0.4)",
        duration: 2,
        ease: "power4.out",
      },
    );
  });
  return { refImageContainer };
};

export default useIntro;
