import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

const useTopNav = () => {
  const container = useRef<HTMLUListElement | null>(null);
  const linesRef = useRef<(HTMLSpanElement | null)[]>([]);

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const menuItems = [
    "COMPUTER DEPARTMENT",
    "POWER DEPARTMENT",
    "CALIBRATION DEPARTMENT",
    "ABOUT US",
  ];

  useGSAP(
    () => {
      gsap.set(".topnav__line", { scaleX: 0 });
    },
    { scope: container },
  );

  const animateLine = (i: number, show: boolean) => {
    const line = linesRef.current[i];
    if (!line) return;

    gsap.to(line, {
      scaleX: show ? 1 : 0,
      duration: 0.6,
      ease: "power2.inOut",
    });
  };

  const handleEnter = (i: number) => {
    setActiveIndex(i);
    animateLine(i, true);
  };

  const handleLeave = (i: number) => {
    animateLine(i, false);
    setActiveIndex(null);
  };

  return {
    activeIndex,
    menuItems,
    container,
    linesRef,
    handleEnter,
    handleLeave,
  };
};

export default useTopNav;
