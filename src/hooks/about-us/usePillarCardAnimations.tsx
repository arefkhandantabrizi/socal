import gsap from "@/utils/gsap";
import { useRef } from "react";

const usePillarCardAnimations = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const outerContainerRef = useRef<HTMLElement | null>(null);

  const onMouseEnter = () => {
    if (!containerRef.current) return;

    gsap.to(containerRef.current, {
      backgroundColor: "rgba(28,32,36,0.4)",
      border: "1px solid #173138",
      duration: 0.2,
      ease: "none",
    });
  };
  const onMouseLeave = () => {
    if (!containerRef.current) return;

    gsap.to(containerRef.current, {
      backgroundColor: "transparent",
      border: "none",
      duration: 0.2,
      ease: "none",
    });
  };
  // useGSAP(
  //   () => {
  //     const root = outerContainerRef.current;
  //     const tween = containerAnimationRef?.current;

  //     if (!root || !tween) return;

  //     const cards = root.querySelectorAll(".pillar__card");
  //     const parentST = tween.scrollTrigger;

  //     if (!parentST || !parentST.isActive) {
  //       const check = () => {
  //         if (tween.scrollTrigger?.isActive) {
  //           run();

  //           ScrollTrigger.removeEventListener("refresh", check);
  //         }
  //       };

  //       const run = () => {
  //         gsap.fromTo(
  //           cards,
  //           { y: 40, opacity: 0 },
  //           {
  //             y: 0,
  //             opacity: 1,
  //             stagger: 0.15,
  //             scrollTrigger: {
  //               trigger: root,
  //               containerAnimation: tween,
  //               // start: "left center",
  //               // markers: true,
  //             },
  //           },
  //         );
  //       };

  //       ScrollTrigger.addEventListener("refresh", check);
  //       ScrollTrigger.refresh();

  //       return;
  //     }

  //     gsap.fromTo(
  //       cards,
  //       { y: 40, opacity: 0 },
  //       {
  //         y: 0,
  //         opacity: 1,
  //         stagger: 0.15,
  //         scrollTrigger: {
  //           trigger: root,
  //           containerAnimation: tween,
  //           // start: "left center",
  //           // markers: true,
  //         },
  //       },
  //     );
  //   },
  //   { scope: outerContainerRef },
  // );

  // useGSAP(
  //   () => {
  //     const root = outerContainerRef.current;
  //     const tween = containerAnimationRef?.current;
  //     if (!root) return;
  //     // safer than global selector
  //     const cards = root.querySelectorAll<HTMLElement>(".pillar__card");

  //     const run = () => {
  //       if (!tween?.scrollTrigger) return false;
  //       return tween.scrollTrigger.isActive;
  //     };
  //     if (!cards.length) return;
  //     // if no horizontal scroll exists yet, still run basic animation
  //     if (!tween) {
  //       gsap.fromTo(
  //         cards,
  //         { y: 40, opacity: 0 },
  //         {
  //           y: 0,
  //           opacity: 1,
  //           stagger: 0.15,
  //           ease: "power3.out",
  //         },
  //       );

  //       return;
  //     }

  //     // Scroll-linked animation (when horizontal scroll exists)
  //     const animate = () => {
  //       gsap.fromTo(
  //         cards,

  //         { y: 40, opacity: 0 },

  //         {
  //           y: 0,

  //           opacity: 1,

  //           stagger: 0.15,

  //           scrollTrigger: {
  //             trigger: root,

  //             containerAnimation: tween,

  //             start: "left center",
  //           },
  //         },
  //       );
  //     };
  //     gsap.fromTo(
  //       cards,
  //       { y: 40, opacity: 0 },
  //       {
  //         y: 0,
  //         opacity: 1,
  //         stagger: 0.15,
  //         ease: "power3.out",
  //         scrollTrigger: {
  //           trigger: root,
  //           containerAnimation: tween,
  //           start: "left center",
  //           end: "center center",
  //         },
  //       },
  //     );
  //     if (run()) {
  //       animate();
  //     } else {
  //       // wait for ScrollTrigger to fully initialize

  //       ScrollTrigger.addEventListener("refresh", () => {
  //         if (run()) animate();
  //       });

  //       ScrollTrigger.refresh();
  //     }
  //   },

  //   {
  //     scope: outerContainerRef,
  //     dependencies: [containerAnimationRef],
  //   },
  // );

  // useGSAP(
  //   () => {
  //     const container = outerContainerRef.current;
  //     const parentContainer = containerAnimationRef?.current;
  //     if (!container || !parentContainer) return;

  //     const tl = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: container,
  //         containerAnimation: parentContainer,
  //         start: "start center",
  //         end: "50% center",
  //         markers: true,
  //       },
  //     });

  //     tl.fromTo(
  //       container.querySelectorAll(".pillar__card"),
  //       {
  //         y: 40,
  //         opacity: 0,
  //       },
  //       {
  //         y: 0,
  //         stagger: 0.2,
  //         opacity: 1,
  //         ease: "power4.inOut",
  //       },
  //     );
  //   },
  //   { scope: outerContainerRef, dependencies: [containerAnimationRef] },
  // );

  return {
    outerContainerRef,
    containerRef,
    onMouseEnter,
    onMouseLeave,
  };
};

export default usePillarCardAnimations;
