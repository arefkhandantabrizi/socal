"use client";

import usePillarCard from "@/hooks/about-us/usePillarCard";
import PillarCard from "./pillarCard";
import usePillarCardAnimations from "@/hooks/about-us/usePillarCardAnimations";

const Pillars = () => {
  const { cards } = usePillarCard();
  return (
    <section className="pillars">
      <h2 className="pillars--label">MODULE 02 // CORE PILLARS</h2>
      <h2 className="pillars--header">Multi-Disciplinary Synthesis</h2>
      <div className="pillars--cards">
        {cards.map((card, index) => {
          const { body, header, icon } = card;
          return (
            <PillarCard
              key={index}
              {...{
                body,
                header,
                icon,
              }}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Pillars;
