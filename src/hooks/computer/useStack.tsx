import { useRef } from "react";
import gsap from "@/utils/gsap";
import { useGSAP } from "@gsap/react";

const useStack = () => {
  const containerRef = useRef<HTMLElement | null>(null);
  const webRef = useRef<HTMLDivElement | null>(null);
  const webIconWrapperRef = useRef<HTMLDivElement | null>(null);
  const webIconRef = useRef<HTMLDivElement | null>(null);
  const webIconRef1 = useRef<HTMLDivElement | null>(null);
  const backendRef = useRef<HTMLDivElement | null>(null);
  const backendIconWrapperRef = useRef<HTMLDivElement | null>(null);
  const backendIconRef = useRef<HTMLDivElement | null>(null);
  const backendIconRef2 = useRef<HTMLDivElement | null>(null);
  const backendIconRef3 = useRef<HTMLDivElement | null>(null);
  const aiRef = useRef<HTMLDivElement | null>(null);
  const aiIconRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      const web = webRef.current;
      const webIconWrapper = webIconWrapperRef.current;
      const webIcon = webIconRef.current;
      const webIcon1 = webIconRef1.current;
      const backend = backendRef.current;
      const backendIconWrapper = backendIconWrapperRef.current;
      const backendIcon = backendIconRef.current;
      const backendIcon2 = backendIconRef2.current;
      const backendIcon3 = backendIconRef3.current;
      const ai = aiRef.current;
      const aiIcon = aiIconRef.current;

      if (
        !container ||
        !web ||
        !webIconWrapper ||
        !webIcon ||
        !webIcon1 ||
        !backend ||
        !backendIconWrapper ||
        !backendIcon ||
        !backendIcon2 ||
        !backendIcon3 ||
        !ai ||
        !aiIcon
      ) {
        return;
      }

      /*
       * INITIAL STATES
       */
      gsap.set([web, webIconWrapper, backend, backendIconWrapper, ai, aiIcon], {
        opacity: 0,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "+=400%",
          scrub: 1.2,
          pin: true,
          anticipatePin: 1,
        },
      });

      /*
       * FRONTEND
       */
      tl.to(web, {
        opacity: 1,
        x: 0,
        duration: 1.5,
        ease: "power3.out",
      })
        .fromTo(
          webIconWrapper,
          {
            opacity: 0,
            x: 120,
          },
          {
            opacity: 1,
            x: 0,
            duration: 1.5,
            ease: "power3.out",
          },
          "<",
        )
        .fromTo(
          [webIcon, webIcon1],
          {
            opacity: 0,
            scale: 0.7,
            y: 40,
          },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            stagger: 0.2,
            duration: 1,
            ease: "back.out(1.7)",
          },
          "-=0.9",
        )

        /*
         * FRONTEND EXIT
         */
        .to(
          [web, webIconWrapper],
          {
            opacity: 0,
            y: -80,
            scale: 0.9,
            duration: 1.2,
            ease: "power2.inOut",
          },
          "+=1",
        )

        /*
         * BACKEND
         */
        .fromTo(
          backend,
          {
            opacity: 0,
            x: -120,
          },
          {
            opacity: 1,
            x: 0,
            duration: 1.5,
            ease: "power3.out",
          },
        )
        .fromTo(
          backendIconWrapper,
          {
            opacity: 0,
            x: 120,
          },
          {
            opacity: 1,
            x: 0,
            duration: 1.5,
            ease: "power3.out",
          },
          "<",
        )
        .fromTo(
          [backendIcon, backendIcon2, backendIcon3],
          {
            opacity: 0,
            scale: 0.6,
            y: 50,
          },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            stagger: 0.18,
            duration: 1,
            ease: "back.out(1.7)",
          },
          "-=0.9",
        )

        /*
         * BACKEND EXIT
         */
        .to(
          [backend, backendIconWrapper],
          {
            opacity: 0,
            y: -80,
            scale: 0.9,
            duration: 1.2,
            ease: "power2.inOut",
          },
          "+=1",
        )

        /*
         * AI
         */
        .fromTo(
          ai,
          {
            opacity: 0,
            x: -120,
          },
          {
            opacity: 1,
            x: 0,
            duration: 1.5,
            ease: "power3.out",
          },
        )
        .fromTo(
          aiIcon,
          {
            opacity: 0,
            x: 120,
            scale: 0.85,
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 1.5,
            ease: "power3.out",
          },
          "<",
        )

        /*
         * FINAL EXIT
         */
        .to(
          container,
          {
            scale: 0.92,
            opacity: 0.45,
            duration: 2,
            ease: "power2.out",
          },
          "+=1",
        );
    },
    {
      scope: containerRef,
    },
  );

  return {
    containerRef,
    webRef,
    webIconWrapperRef,
    webIconRef,
    webIconRef1,
    backendRef,
    backendIconWrapperRef,
    backendIconRef,
    backendIconRef2,
    backendIconRef3,
    aiRef,
    aiIconRef,
  };
};

export default useStack;
