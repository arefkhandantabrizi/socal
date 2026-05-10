"use client";

import useIntro from "@/hooks/computer/useIntro";
import Image from "next/image";

const Intro = () => {
  const { refImageContainer } = useIntro();
  return (
    <section className="intro">
      <div className="intro__text">
        <h1 className="intro__text--header-1">DEPARTMENT_01</h1>
        <h1 className="intro__text--header-2">
          COMPUTATIONAL <br /> SYSTEMS_HUB
        </h1>
        <h2 className="intro__text--body">
          High-fidelity industrial AI engineering. Bridging the gap between
          tactile mechanical hardware and hyper-scaled digital infrastructure
          through Neural Architectures, predictive modeling, and autonomous
          protocols.
        </h2>
        <button className="intro__text--btn">Schedule a Meeting</button>
      </div>
      <div className="intro__img--container" ref={refImageContainer}>
        <Image
          className="intro__img"
          src="/computer-stack.webp"
          alt="computer stack"
          width={500}
          height={500}
          preload
        />
      </div>
    </section>
  );
};

export default Intro;
