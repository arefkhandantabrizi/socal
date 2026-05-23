import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "@/utils/gsap";

const useIndustrialApp = () => {
  const containerRef = useRef<HTMLElement | null>(null);
  const linkRef = useRef<HTMLDivElement | null>(null);
  const linkRef2 = useRef<HTMLDivElement | null>(null);
  const linkRef3 = useRef<HTMLDivElement | null>(null);
  const architecturesRef = useRef<HTMLDivElement | null>(null);
  const dashboardRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      const link1 = linkRef.current;
      const link2 = linkRef2.current;
      const link3 = linkRef3.current;
      const architectures = architecturesRef.current;
      const dashboard = dashboardRef.current;

      if (
        !container ||
        !link1 ||
        !link2 ||
        !link3 ||
        !architectures ||
        !dashboard
      ) {
        return;
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top center",
          once: true,
        },
        defaults: {
          ease: "power4.out",
        },
      });

      tl.to([link1, link2, link3], {
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
      })
        .fromTo(
          architectures,
          {
            y: 20,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
          },
          "-=0.2",
        )
        .fromTo(
          dashboard,
          {
            y: -20,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
          },
          "<0.15",
        );
    },
    {
      scope: containerRef,
    },
  );

  return {
    containerRef,
    linkRef,
    linkRef2,
    linkRef3,
    architecturesRef,
    dashboardRef,
  };
};

export default useIndustrialApp;
