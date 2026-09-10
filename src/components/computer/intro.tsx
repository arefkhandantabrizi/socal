"use client";

import useNavigateTo from "@/hooks/common/useNavigate";
import useIntro from "@/hooks/computer/useIntro";
import Image from "next/image";

const Intro = () => {
  const { refImageContainer } = useIntro();
  const { handleNavigate } = useNavigateTo();
  return (
    <section className="intro">
      <div className="intro__text">
        <h1 className="intro__text--header-1">DEPARTMENT_01</h1>
        <h1 className="intro__text--header-2">
          COMPUTATIONAL <br /> SYSTEMS_HUB
        </h1>
        <h2 className="intro__text--body">
          From sleek commercial platforms and SaaS products to high-scale web
          applications and mission-critical systems. Whatever your vision, we
          engineer production-ready digital solutions engineered for immediate
          impact and unmatched performance.
        </h2>
        <button
          className="btn btn--primary bold"
          onClick={() => handleNavigate("/about-us#transmission")}
        >
          Get a Quote
        </button>
      </div>
      <div className="intro__img--container" ref={refImageContainer}>
        <Image
          className="intro__img"
          src="/computer-stack.webp"
          alt="computer stack"
          width={500}
          height={500}
          priority={true}
        />
      </div>
    </section>
  );
};

export default Intro;
