import gsap from "@/utils/gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const useSquareRotation = () => {
  const squareRef = useRef<HTMLDivElement | null>(null);
  const squareContainerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const square = squareRef.current;
      const container = squareContainerRef.current;

      if (!square || !container) return;

      gsap.to(square, {
        rotation: 360,
        duration: 6,
        ease: "none",
        repeat: -1,
        transformOrigin: "50% 50%",
      });
    },
    { scope: squareContainerRef },
  );

  return { squareContainerRef, squareRef };
};

export default useSquareRotation;
