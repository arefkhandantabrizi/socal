"use client";
import useHero from "@/hooks/home/useHero";
import Image from "next/image";

const Hero = () => {
  const { containerRef, containerRefBadge, containerRefText } = useHero();
  return (
    <section className="hero">
      <div className="hero__img--container" ref={containerRef}>
        <Image
          className="hero__img"
          src="/hero.webp"
          alt="electrical device"
          width={700}
          height={500}
          preload
        />
        <div className="hero__img--badge" ref={containerRefBadge}>
          <p className="hero__img--badge--header ">NODE_STATUS</p>
          <p className="hero__img--badge--sub ">SYNCHRONIZED</p>
        </div>
      </div>

      <div className="hero__text" ref={containerRefText}>
        <h1 className="hero__text--header-1">Engineered</h1>
        <h1 className="hero__text--header-2">Precision.</h1>
        <h2 className="hero__text--body">
          Architecting Intelligence through heigh-fidelity hardware synthesis
          and next-generation industrial computing. We build the infrastructure
          of tomorrow.
        </h2>
        <button className="hero__text--btn">Schedule a Meeting</button>
      </div>
    </section>
  );
};

export default Hero;
