import gsap from "@/utils/gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import useIsMobile from "../common/useIsMobile";

const useDivisionAnimation = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);

  const isMobile = useIsMobile();

  useGSAP(
    () => {
      const section = sectionRef.current;
      const track = trackRef.current;

      if (!section || !track) return;

      const totalScroll = !isMobile
        ? track.scrollWidth -
          (window.innerWidth >= 2000 ? 2000 : window.innerWidth)
        : track.scrollWidth + 90 - window.innerWidth;

      gsap.to(track, {
        x: -totalScroll,
        ease: "none",

        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: `+=${totalScroll}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      panelRefs.current.forEach((panel) => {
        if (!panel) return;

        gsap.from(panel, {
          opacity: 0,
          scale: 0.92,
          duration: 1.2,
          ease: "power4.inOut",

          scrollTrigger: {
            trigger: panel,
            start: "left center",
            horizontal: true,
            containerAnimation: gsap.getTweensOf(track)[0],
          },
        });
      });
    },
    {
      scope: sectionRef,
    },
  );

  return {
    sectionRef,
    trackRef,
    panelRefs,
  };
};

export default useDivisionAnimation;
