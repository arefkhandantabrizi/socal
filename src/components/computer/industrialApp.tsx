"use client";

import Image from "next/image";
import useIndustrialApp from "@/hooks/computer/useIndustrialApp";

const IndustrialApp = () => {
  const {
    containerRef,
    linkRef,
    linkRef2,
    linkRef3,
    architecturesRef,
    dashboardRef,
  } = useIndustrialApp();

  return (
    <section className="industrial" ref={containerRef}>
      <div className="industrial__text">
        <h3 className="industrial__text--header">
          industrial <br /> applications
        </h3>

        <div className="industrial__text--body">
          Our Computer Department leads the charge in high-fidelity AI
          engineering. We build the neural interfaces and predictive models for
          the future of autonomous heavy industry.
        </div>

        <div className="industrial__text--link" ref={linkRef}>
          predictive maintenance ai
        </div>

        <div className="industrial__text--link" ref={linkRef2}>
          dynamic grid balancing
        </div>

        <div className="industrial__text--link" ref={linkRef3}>
          autonomous swarm control
        </div>
      </div>

      <div className="industrial__images">
        <div className="industrial__image-wrapper">
          <Image
            src="/computer.webp"
            alt="industrial computer screen"
            className="industrial__image industrial__image--computer"
            fill
            sizes="400px"
          />

          <div className="industrial__image-label" ref={architecturesRef}>
            industrial architectures
          </div>
        </div>

        <div className="industrial__image-wrapper">
          <Image
            src="/dashboard.webp"
            alt="industrial dashboard screen"
            className="industrial__image industrial__image--dashboard"
            fill
            sizes="400px"
          />

          <div className="industrial__image-label" ref={dashboardRef}>
            industrial dashboard
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustrialApp;
