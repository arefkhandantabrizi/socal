"use client";
import usePowerLine from "@/hooks/power/usePowerLine";
import Hero from "./hero";
import DesignAndPlanning from "./designAndPlanning";
import Solar from "./solar";

const PowerClient = () => {
  const { lineRef, sectionRef } = usePowerLine();
  return (
    <section className="power" ref={sectionRef}>
      <div className="power__scan-line" ref={lineRef} />
      <Hero />
      <DesignAndPlanning />
      <Solar />
    </section>
  );
};

export default PowerClient;
