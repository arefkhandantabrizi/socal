import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const useMobileNavAnimation = (isOpen: boolean) => {
  const [shouldRender, setShouldRender] = useState(isOpen);

  const [prevIsOpen, setPrevIsOpen] = useState(isOpen);
  if (isOpen !== prevIsOpen) {
    setPrevIsOpen(isOpen);
    if (isOpen) setShouldRender(true);
  }

  const overlayRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Array<HTMLLIElement | null>>([]);

  const setItemRef = (index: number) => (el: HTMLLIElement | null) => {
    itemRefs.current[index] = el;
  };

  useGSAP(
    () => {
      const overlay = overlayRef.current;
      if (!overlay) return;

      const items = itemRefs.current.filter(Boolean) as HTMLLIElement[];
      const closeButton = closeButtonRef.current;

      if (isOpen) {
        const tl = gsap.timeline();
        tl.set(overlay, { autoAlpha: 0 })
          .to(overlay, { autoAlpha: 1, duration: 0.3, ease: "power2.out" })
          .from(
            items,
            {
              y: 40,
              autoAlpha: 0,
              duration: 0.45,
              stagger: 0.07,
              ease: "power3.out",
            },
            "-=0.1",
          );

        if (closeButton) {
          tl.from(
            closeButton,
            { autoAlpha: 0, rotate: -90, duration: 0.3, ease: "power2.out" },
            "-=0.3",
          );
        }
      } else if (shouldRender) {
        gsap
          .timeline({ onComplete: () => setShouldRender(false) })
          .to(items, {
            y: -20,
            autoAlpha: 0,
            duration: 0.25,
            stagger: 0.04,
            ease: "power2.in",
          })
          .to(overlay, { autoAlpha: 0, duration: 0.25 }, "-=0.1");
      }
    },
    { dependencies: [isOpen, shouldRender], scope: overlayRef },
  );

  return { shouldRender, overlayRef, closeButtonRef, setItemRef };
};

export default useMobileNavAnimation;
