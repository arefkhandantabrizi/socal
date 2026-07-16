import gsap from "@/utils/gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";
import useIsMobile from "../common/useIsMobile";

const useAboutus = () => {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const horizontalTweenRef = useRef<GSAPTween | null>(null);

  useEffect(() => {
    ScrollTrigger.refresh();
  }, []);

  useGSAP(
    () => {
      const track = trackRef.current;
      const section = sectionRef.current;
      if (!track || !section) return;
      const getDistance = () => {
        return !useIsMobile
          ? track.scrollWidth -
              (window.innerWidth >= 2000 ? 2000 : window.innerWidth)
          : track.scrollWidth - window.innerWidth;
      };
      const tween = gsap.to(track, {
        x: () => -getDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${getDistance()}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      ScrollTrigger.refresh();

      return () => {
        tween.kill();
      };
    },
    { scope: sectionRef },
  );
  return {
    sectionRef,
    trackRef,
    horizontalTweenRef,
  };
};

export default useAboutus;
