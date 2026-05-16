import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const useIndustrialApp = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".industrial",
        start: "top center",
        end: "bottom 10%",
      },
    });
    tl.to(".industrial__text--link", {
      "--line-scale": 1,
      duration: 1.2,
      ease: "power4.inOut",
      stagger: 0.15,
    });
    tl.fromTo(
      ".industrial__architectures--text",
      {
        y: 20,
        opacity: 0,
      },
      { y: 0, opacity: 1, duration: 0.5, ease: "power4.inOut" },
      "=-.2",
    );
    tl.fromTo(
      ".industrial__dashboard--text",
      {
        y: -20,
        opacity: 0,
      },
      { y: 0, opacity: 1, duration: 0.5, delay: 0.2, ease: "power4.inOut" },
      "<",
    );
  });
};

export default useIndustrialApp;
