import gsap from "@/utils/gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const useIntro = () => {
  const refImageContainer = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const imageContainer = refImageContainer.current;

      if (!imageContainer) return;

      gsap.fromTo(
        imageContainer,
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
    },
    { scope: refImageContainer },
  );

  return { refImageContainer };
};

export default useIntro;
