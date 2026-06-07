import gsap from "@/utils/gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const useInquiry = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const labelRef = useRef<HTMLDivElement | null>(null);

  const headerRef = useRef<HTMLHeadingElement | null>(null);

  const subheaderRef = useRef<HTMLHeadingElement | null>(null);

  const btn1Ref = useRef<HTMLButtonElement | null>(null);

  const btn2Ref = useRef<HTMLButtonElement | null>(null);

  useGSAP(
    () => {
      const container = containerRef.current;

      const label = labelRef.current;

      const header = headerRef.current;

      const subheader = subheaderRef.current;

      const btn1 = btn1Ref.current;

      const btn2 = btn2Ref.current;

      if (!container || !label || !header || !subheader || !btn1 || !btn2) {
        return;
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,

          start: "top top",

          end: "+=120%",

          scrub: 1,

          pin: true,

          anticipatePin: 1,
        },
      });

      tl.from(label, {
        opacity: 0,
        y: 30,
        duration: 0.4,
        ease: "power2.out",
      })

        .from(
          header,
          {
            opacity: 0,
            y: 120,
            skewY: 4,
            duration: 1.2,
            ease: "power4.out",
          },
          "-=0.1",
        )

        .from(
          subheader,
          {
            opacity: 0,
            y: 120,
            skewY: 4,
            duration: 1.2,
            ease: "power4.out",
          },
          "-=0.95",
        )

        .from(
          [btn1, btn2],
          {
            opacity: 0,
            y: 50,
            stagger: 0.12,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.75",
        )

        .to(
          container,
          {
            scale: 0.94,
            opacity: 0.55,
            ease: "none",
          },
          "+=0.5",
        );
    },
    {
      scope: containerRef,
    },
  );

  return {
    containerRef,
    btn1Ref,
    btn2Ref,
    headerRef,
    subheaderRef,
    labelRef,
  };
};

export default useInquiry;
