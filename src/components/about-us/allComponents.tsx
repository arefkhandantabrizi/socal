"use client";
import Intro from "./intro";
import AboutTimeline from "./aboutTimeline";
import Ethos from "./ethos";
import Synchronize from "./synchronize";
import Transmission from "./transmission";
import useAboutusNavigation from "@/hooks/about-us/useAboutusNavigation";

const AllComponents = () => {
  useAboutusNavigation();
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

export default AllComponents;
