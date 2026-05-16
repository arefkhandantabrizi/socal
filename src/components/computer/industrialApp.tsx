"use client";

import useIndustrialApp from "@/hooks/computer/useIndustrialApp";
import Image from "next/image";

const IndustrialApp = () => {
  useIndustrialApp();

  return (
    <section className="industrial">
      <div className="industrial__text">
        <h3 className="industrial__text--header">
          industrial <br /> applications
        </h3>
        <div className="industrial__text--body">
          Our Computer Department leads the charge in high-fidelity AI
          engineering. We build the neural interfaces and predivtive models for
          the future of autonomousy heavy industry.
        </div>
        <div className="industrial__text--link">predivtive maintenance ai</div>
        <div className="industrial__text--link">dynamic grid balancing</div>
        <div className="industrial__text--link">autonomous swarm control </div>
      </div>
      <div className="industrial__images">
        <div className="industrial__architectures--wrapper">
          <Image
            src={"/computer.webp"}
            alt="industrial computer screen"
            className="industrial__architectures--image"
            width={400}
            height={250}
            preload
          />
          <div className="industrial__architectures--text">
            industrial architectures
          </div>
        </div>
        <div className="industrial__dashboard--wrapper">
          <Image
            src={"/dashboard.webp"}
            alt="industrial dashboard screen"
            className="industrial__dashboard--image"
            width={330}
            height={230}
            preload
          />
          <div className="industrial__dashboard--text">
            industrial dashboard
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustrialApp;
