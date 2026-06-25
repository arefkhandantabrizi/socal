"use client";
import useAboutus from "@/hooks/about-us/useAboutus";
import Origin from "./origin";
import Pillars from "./pillars";
import RoadMap from "./roadMap";
import Validation from "./validation";

const AboutTimeline = () => {
  const { sectionRef, trackRef } = useAboutus();
  return (
    <section ref={sectionRef} className="aboutTimeline">
      <div ref={trackRef} className="aboutTimeline__track">
        <Origin />
        <Pillars />
        <RoadMap />
        <Validation />
      </div>
    </section>
  );
};

export default AboutTimeline;
