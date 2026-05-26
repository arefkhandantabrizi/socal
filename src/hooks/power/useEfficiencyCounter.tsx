import { useRef } from "react";
import gsap from "@/utils/gsap";
import { useGSAP } from "@gsap/react";

const useEfficiencyCounter = () => {
  const efficiencyRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const efficiency = efficiencyRef.current;
      const container = containerRef.current;

      if (!efficiency || !container) return;

      const counter = {
        value: 0,
      };

      gsap.set(efficiency, {
        textContent: "0.0%",
      });

      gsap.to(counter, {
        value: 99.8,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
        onUpdate: () => {
          efficiency.textContent = `${counter.value.toFixed(1)}%`;
        },
      });
    },
    { scope: containerRef },
  );

  return { efficiencyRef, containerRef };
};

export default useEfficiencyCounter;
