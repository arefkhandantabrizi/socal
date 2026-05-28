import gsap from "@/utils/gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const useSolarTilt = () => {
  const solarCardRef = useRef<HTMLDivElement | null>(null);
  const analysisCardRef = useRef<HTMLDivElement | null>(null);
  const solarIconWrapperRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const cards = [solarCardRef.current, analysisCardRef.current].filter(
      Boolean,
    ) as HTMLDivElement[];

    gsap.set(cards, {
      transformPerspective: 900,
      transformOrigin: "center center",
    });
  }, []);

  const tiltCard = (
    event: React.MouseEvent<HTMLDivElement>,
    card: HTMLDivElement | null,
  ) => {
    if (!card) return;

    const rect = card.getBoundingClientRect();

    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    const percentX = (mouseX - rect.width / 2) / (rect.width / 2);
    const percentY = (mouseY - rect.height / 2) / (rect.height / 2);

    gsap.to(card, {
      x: percentX * 4,
      y: percentY * 4,
      rotateX: percentY * -2,
      rotateY: percentX * 2,
      duration: 0.45,
      ease: "power3.out",
      overwrite: "auto",
    });
  };

  const resetCard = (card: HTMLDivElement | null) => {
    if (!card) return;

    gsap.to(card, {
      x: 0,
      y: 0,
      rotateX: 0,
      rotateY: 0,
      duration: 0.75,
      ease: "elastic.out(1, 0.45)",
      overwrite: "auto",
    });
  };

  const activateSolarIcon = () => {
    if (!solarIconWrapperRef.current) return;

    gsap.to(solarIconWrapperRef.current, {
      color: "#eeeeee",
      duration: 0.3,
      ease: "power2.out",
      overwrite: "auto",
    });
  };

  const resetSolarIcon = () => {
    if (!solarIconWrapperRef.current) return;

    gsap.to(solarIconWrapperRef.current, {
      color: "",
      duration: 0.35,
      ease: "power2.out",
      overwrite: "auto",
    });
  };

  return {
    solarCardRef,
    analysisCardRef,
    solarIconWrapperRef,

    solarCardEvents: {
      onMouseEnter: activateSolarIcon,
      onMouseMove: (event: React.MouseEvent<HTMLDivElement>) =>
        tiltCard(event, solarCardRef.current),
      onMouseLeave: () => {
        resetCard(solarCardRef.current);
        resetSolarIcon();
      },
    },

    analysisCardEvents: {
      onMouseMove: (event: React.MouseEvent<HTMLDivElement>) =>
        tiltCard(event, analysisCardRef.current),
      onMouseLeave: () => resetCard(analysisCardRef.current),
    },
  };
};

export default useSolarTilt;
