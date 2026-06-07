"use client";

import useDivisions from "@/hooks/home/useDivisions";
import useDivisionAnimation from "@/hooks/home/useDivisionAnimation";
import DivisionCard from "./divisionCard";

const Divisions = () => {
  const { cards } = useDivisions();
  const { sectionRef, trackRef, panelRefs } = useDivisionAnimation();

  return (
    <section className="divisions" ref={sectionRef}>
      <div className="divisions__track" ref={trackRef}>
        {cards.map((card, index) => (
          <DivisionCard
            {...card}
            index={index}
            key={index}
            panelRef={(el) => {
              panelRefs.current[index] = el;
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Divisions;
