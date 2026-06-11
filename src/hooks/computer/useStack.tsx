import { useRef } from "react";
import gsap from "@/utils/gsap";
import { useGSAP } from "@gsap/react";

const useStack = () => {
  const containerRef = useRef<HTMLElement | null>(null);
  const webRef = useRef<HTMLDivElement | null>(null);
  const webIconRef = useRef<HTMLDivElement | null>(null);
  const webIconRef1 = useRef<HTMLDivElement | null>(null);
  const backendRef = useRef<HTMLDivElement | null>(null);
  const backendIconRef = useRef<HTMLDivElement | null>(null);
  const backendIconRef2 = useRef<HTMLDivElement | null>(null);
  const backendIconRef3 = useRef<HTMLDivElement | null>(null);
  const backendIconWrapperRef = useRef<HTMLDivElement | null>(null);
  const webIconWrapperRef = useRef<HTMLDivElement | null>(null);
  const aiRef = useRef<HTMLDivElement | null>(null);
  const aiIconRef = useRef<HTMLDivElement | null>(null);
  // const industrialRef = useRef<HTMLDivElement | null>(null);
  // const industrialImageRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      const web = webRef.current;
      const ai = aiRef.current;
      const webIcon = webIconRef.current;
      const webIcon1 = webIconRef1.current;
      const webIconWrapper = webIconWrapperRef.current;
      const aiIcon = aiIconRef.current;
      // const industrial = industrialRef.current;
      // const industrialImage = industrialImageRef.current;
      const backend = backendRef.current;
      const backendIcon = backendIconRef.current;
      const backendIcon2 = backendIconRef2.current;
      const backendIcon3 = backendIconRef3.current;
      const backendIconWrapper = backendIconWrapperRef.current;

      if (
        !container ||
        !web ||
        !ai ||
        !webIcon ||
        !webIcon1 ||
        !aiIcon ||
        !webIconWrapper ||
        // !industrial ||
        // !industrialImage ||
        !backend ||
        !backendIcon ||
        !backendIcon2 ||
        !backendIcon3 ||
        !backendIconWrapper
      )
        return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "+=140%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      tl.from(web, {
        opacity: 0,
        x: -40,
        duration: 0.4,
        ease: "power4.inOut",
      })
        .from(
          webIconWrapper,
          {
            opacity: 0,
            x: 40,
            duration: 0.4,
            ease: "power4.inOut",
          },
          "-=0.1",
        )
        .from(
          [webIcon, webIcon1],
          {
            opacity: 0,
            x: 20,
            duration: 0.4,
            ease: "power4.inOut",
            stagger: 0.1,
          },
          "-=0.1",
        )
        .to([web, webIconWrapper, webIcon, webIcon1], { opacity: 0 })
        .from(
          backendIconWrapper,
          {
            opacity: 0,
            x: 40,
            duration: 0.4,
            ease: "power4.inOut",
          },
          "-=0.1",
        )
        .from(
          [backendIcon, backendIcon2, backendIcon3],
          {
            opacity: 0,
            x: 20,
            duration: 0.4,
            ease: "power4.inOut",
            stagger: 0.1,
          },
          "-=0.1",
        )
        .from(
          backend,
          {
            opacity: 0,
            x: -40,
            duration: 0.4,
            ease: "power4.inOut",
          },
          "-=0.1",
        )
        .to(
          [
            backendIconWrapper,
            backendIcon,
            backendIcon2,
            backendIcon3,
            backend,
          ],
          { opacity: 0 },
        )
        .from(
          ai,
          {
            opacity: 0,
            x: -40,
            duration: 0.4,
            ease: "power4.inOut",
          },
          "-=0.1",
        )
        .from(
          aiIcon,
          {
            opacity: 0,
            x: 40,
            duration: 0.4,
            ease: "power4.inOut",
          },
          "-=0.1",
        )
        .to([ai, aiIcon], { opacity: 0 })
        // .from(
        //   industrial,
        //   {
        //     opacity: 0,
        //     x: -40,
        //     duration: 0.4,
        //     ease: "power4.inOut",
        //   },
        //   "-=0.95",
        // )
        // .from(
        //   industrialImage,
        //   {
        //     opacity: 0,
        //     x: 40,
        //     duration: 0.4,
        //     ease: "power4.inOut",
        //   },
        //   "-=0.45",
        // )
        .to(
          container,
          {
            scale: 0.94,
            opacity: 0.55,
            ease: "none",
          },
          "-=0.9",
        );
    },
    { scope: containerRef },
  );
  return {
    aiIconRef,
    aiRef,
    containerRef,
    webIconRef,
    webIconRef1,
    webIconWrapperRef,
    webRef,
    backendRef,
    backendIconRef,
    backendIconRef2,
    backendIconRef3,
    backendIconWrapperRef,
  };
};

export default useStack;
