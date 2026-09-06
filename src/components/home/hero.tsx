"use client";
import useNavigateTo from "@/hooks/common/useNavigate";
import useHero from "@/hooks/home/useHero";
import Image from "next/image";

const Hero = () => {
  const { rootRef, badgeRef, imageRef, textRef } = useHero();
  const { handleNavigate } = useNavigateTo();
  return (
    <section className="hero" ref={rootRef}>
      <div className="hero__img--container" ref={imageRef}>
        <Image
          priority
          className="hero__img"
          src="/hero.webp"
          alt="electrical device"
          width={700}
          height={500}
        />
        <div className="hero__img--badge" ref={badgeRef}>
          <p className="hero__img--badge--header ">NODE_STATUS</p>
          <p className="hero__img--badge--sub ">SYNCHRONIZED</p>
        </div>
      </div>

      <div className="hero__text" ref={textRef}>
        <h1 className="hero__text--header-1">Engineered</h1>
        <h1 className="hero__text--header-2">Precision.</h1>
        <h2 className="hero__text--body">
          Architecting Intelligence through high-fidelity hardware synthesis and
          next-generation industrial computing. We build the infrastructure of
          tomorrow.
        </h2>
        <button
          // className="hero__text--btn"
          className="btn btn--primary bold"
          onClick={() => handleNavigate("/about-us#transmission")}
        >
          Get a Quote
        </button>
      </div>
    </section>
  );
};

export default Hero;
