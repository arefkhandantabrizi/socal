"use client";
import usePowerLine from "@/hooks/power/usePowerLine";
import Hero from "./hero";
import DesignAndPlanning from "./designAndPlanning";
import Solar from "./solar";
import Ecosystem from "./ecosystem";
import TopBanner from "./topBanner";

const PowerClient = () => {
  const { lineRef, sectionRef } = usePowerLine();
  return (
    <section className="power" ref={sectionRef}>
      <div className="power__scan-line" ref={lineRef} />
      <TopBanner />
      <Hero />
      <DesignAndPlanning />
      <Solar />
      <Ecosystem />
    </section>
  );
};

export default PowerClient;
