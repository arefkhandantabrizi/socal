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
        y: 120,
        scale: 0.9,
        filter: "blur(20px)",
        boxShadow: "0 0 0 transparent",
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        boxShadow: "-1.5rem 0.9rem 2.6rem -0.6rem rgba(0,242,255,0.4)",
        duration: 1.5,
        ease: "expo.out",
      },
    );
  });

  return { refImageContainer };
};

export default useIntro;
