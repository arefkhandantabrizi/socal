"use client";
import usePowerLine from "@/hooks/power/usePowerLine";
import Hero from "./hero";

const PowerClient = () => {
  const { lineRef, sectionRef } = usePowerLine();
  return (
    <section className="power" ref={sectionRef}>
      <div className="power__scan-line" ref={lineRef} />
      <Hero />
    </section>
  );
};

export default PowerClient;
