"use client";
import usePillarCardAnimations from "@/hooks/about-us/usePillarCardAnimations";
import IPillarCard from "@/interfaces/about-us/pillarCard";

const PillarCard = ({ icon, header, body }: IPillarCard) => {
  const { onMouseEnter, onMouseLeave, containerRef } =
    usePillarCardAnimations();
  return (
    <div
      {...{
        onMouseEnter,
        onMouseLeave,
        ref: containerRef,
        className: "pillar__card",
      }}
    >
      {icon}
      <div className="pillar__card--header">{header}</div>
      <div className="pillar__card--body">{body}</div>
    </div>
  );
};

export default PillarCard;
