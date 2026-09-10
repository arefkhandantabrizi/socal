import { RefObject, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "@/utils/gsap";
import { useGSAP } from "@gsap/react";

const useScrollDownIndicator = (footerRef: RefObject<HTMLElement | null>) => {
  const pathname = usePathname();

  const indicatorRef = useRef<HTMLDivElement | null>(null);
  const chevronRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const chevron = chevronRef.current;

      if (!chevron) return;

      gsap.set(chevron, {
        y: 0,
      });

      gsap.to(chevron, {
        y: 10,
        duration: 0.8,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    },
    {
      scope: indicatorRef,
      dependencies: [pathname],
      revertOnUpdate: true,
    },
  );

  useEffect(() => {
    const footer = footerRef.current;
    const indicator = indicatorRef.current;

    if (!footer || !indicator) return;

    let isHidden = false;

    gsap.set(indicator, {
      autoAlpha: 1,
    });

    const updateIndicator = () => {
      const footerTop = footer.getBoundingClientRect().top;
      const footerVisible = footerTop <= window.innerHeight;

      if (footerVisible && !isHidden) {
        isHidden = true;

        gsap.to(indicator, {
          autoAlpha: 0,
          duration: 0.4,
          ease: "power2.out",
        });
      }

      if (!footerVisible && isHidden) {
        isHidden = false;

        gsap.to(indicator, {
          autoAlpha: 1,
          duration: 0.4,
          ease: "power2.out",
        });
      }
    };

    updateIndicator();

    window.addEventListener("scroll", updateIndicator, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", updateIndicator);
    };
  }, [pathname, footerRef]);

  return {
    indicatorRef,
    chevronRef,
  };
};

export default useScrollDownIndicator;
