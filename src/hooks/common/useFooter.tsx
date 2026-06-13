import { useRef } from "react";
import gsap from "@/utils/gsap";
import { useGSAP } from "@gsap/react";
import { usePathname } from "next/navigation";

const useFooter = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const indicatorRef = useRef<HTMLSpanElement | null>(null);

  const pathname = usePathname();

  useGSAP(
    () => {
      const container = containerRef.current;
      const indicator = indicatorRef.current;

      if (!container || !indicator) return;

      gsap.to(indicator, {
        opacity: 0.25,
        scale: 0.75,
        duration: 0.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    },
    { scope: containerRef },
  );

  return { containerRef, indicatorRef, pathname };
};

export default useFooter;
