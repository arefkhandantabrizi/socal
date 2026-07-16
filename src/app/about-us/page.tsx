import AboutTimeline from "@/components/about-us/aboutTimeline";
import Ethos from "@/components/about-us/ethos";
import Intro from "@/components/about-us/intro";
// import Origin from "@/components/about-us/origin";
// import Pillars from "@/components/about-us/pillars";
// import RoadMap from "@/components/about-us/roadMap";
import Synchronize from "@/components/about-us/synchronize";
import Transmission from "@/components/about-us/transmission";
// import Validation from "@/components/about-us/validation";

const AboutUs = () => {
  return (
    <>
      <Intro />
      <AboutTimeline />
      <Ethos />
      <Synchronize />
      <Transmission />
    </>
  );
};

export default AboutUs;
