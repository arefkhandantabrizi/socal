import gsap from "@/utils/gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const useSolarAnalysisAnimation = () => {
  const analysisRef = useRef<HTMLDivElement | null>(null);
  const indicatorRef = useRef<HTMLSpanElement | null>(null);
  const harmonicFillRef = useRef<HTMLDivElement | null>(null);
  const flowFillRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const analysis = analysisRef.current;
      const indicator = indicatorRef.current;
      const harmonicFill = harmonicFillRef.current;
      const flowFill = flowFillRef.current;

      if (!analysis || !indicator || !harmonicFill || !flowFill) return;

      gsap.set([harmonicFill, flowFill], {
        scaleX: 0,
        transformOrigin: "left center",
      });

      gsap.to(indicator, {
        opacity: 0.25,
        scale: 0.75,
        duration: 0.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: analysis,
          start: "top 75%",
          once: true,
        },
      });

      tl.to(harmonicFill, {
        scaleX: 0.75,
        duration: 1.1,
        ease: "power3.out",
      }).to(
        flowFill,
        {
          scaleX: 0.5,
          duration: 1.1,
          ease: "power3.out",
        },
        "-=0.75",
      );
    },
    {
      scope: analysisRef,
    },
  );

  return {
    analysisRef,
    indicatorRef,
    harmonicFillRef,
    flowFillRef,
  };
};

export default useSolarAnalysisAnimation;
