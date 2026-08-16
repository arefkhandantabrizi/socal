import gsap from "@/utils/gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
const useAboutUsAnimation = () => {
  const divContainer = useRef<HTMLElement | null>(null);
  const formContainer = useRef<HTMLFormElement | null>(null);
  const indicatorRef = useRef<HTMLSpanElement | null>(null);

  useGSAP(
    () => {
      const container = divContainer.current;
      const form = formContainer.current;
      const indicator = indicatorRef.current;

      if (!container || !indicator || !form) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top center",
          once: true,
        },
      });
      tl.fromTo(
        form,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power4.inOut",
        },
      );

      gsap.fromTo(
        indicator,
        {
          backgroundColor: "#173138",
          opacity: 0.55,
        },
        {
          backgroundColor: "#00f2ff",
          duration: 0.5,
          opacity: 1,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        },
      );
    },
    { scope: divContainer },
  );

  return { divContainer, formContainer, indicatorRef };
};

export default useAboutUsAnimation;
