"use client";
import Image from "next/image";

const Origin = () => {
  return (
    <section className="origin">
      <div className="origin__text--wrapper">
        <h2 className="origin__text--label">MODULE 01 // ORIGIN & VISION</h2>
        <h2 className="origin__text--header">The SoCal Blueprint</h2>
        <p className="origin__text--body">
          Born from the synthesis of high-frequency computation and industrial
          kinetics, we represent the threshold of the possible. Every component
          is engineered to sub-micron tolerances.
        </p>
      </div>
      <div className="origin__image--wrapper">
        <div className="origin__image--container">
          <Image
            fill
            priority
            src={"/origin.webp"}
            alt="orgin image"
            className="origin__image"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
};

export default Origin;
