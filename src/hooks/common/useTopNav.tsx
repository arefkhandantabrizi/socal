import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "@/utils/gsap";
import { usePathname } from "next/navigation";
import menuItems from "@/utils/menuItems";

const useTopNav = () => {
  const containerRef = useRef<HTMLUListElement | null>(null);
  const linesRef = useRef<(HTMLSpanElement | null)[]>([]);

  const pathname = usePathname();

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useGSAP(
    () => {
      linesRef.current.forEach((line, index) => {
        if (!line) return;

        const isActiveRoute = pathname === menuItems[index].slug;

        gsap.set(line, {
          scaleX: isActiveRoute ? 1 : 0,
          transformOrigin: "left",
        });
      });
    },
    {
      scope: containerRef,
      dependencies: [pathname],
      revertOnUpdate: true,
    },
  );

  const animateLine = (index: number, show: boolean) => {
    const line = linesRef.current[index];

    if (!line) return;

    const isActiveRoute = pathname === menuItems[index].slug;

    gsap.to(line, {
      scaleX: show || isActiveRoute ? 1 : 0,
      duration: 0.45,
      ease: "power3.out",
      overwrite: "auto",
    });
  };

  const handleEnter = (index: number) => {
    setActiveIndex(index);
    animateLine(index, true);
  };

  const handleLeave = (index: number) => {
    setActiveIndex(null);
    animateLine(index, false);
  };

  return {
    activeIndex,
    menuItems,
    containerRef,
    linesRef,
    pathname,
    handleEnter,
    handleLeave,
  };
};

export default useTopNav;
