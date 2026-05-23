import Image from "next/image";

const Hero = () => {
  return (
    <section className="power__hero">
      <Image
        src={"/power.webp"}
        alt="power transformer"
        width={1400}
        height={900}
        className="power__hero--image"
        preload
      />
      <div className="power__hero--text">
        <h1 className="power__hero--text--header-1">DEPARTMENT_02</h1>
        <h1 className="power__hero--text--header-2">
          electrical_ <br /> engineering_
        </h1>
        <h1 className="power__hero--text--header-3">core</h1>
        <h2 className="power__hero--text--body">
          Architecting resillient power infrastructures through high-fidelity
          modeling and precision execution. From grid scale distribution to
          sustainable energy integration.
        </h2>
      </div>
      <div className="power__hero--badge">
        <div className="power__hero--badge--header">status</div>
        <div className="power__hero--badge--body">synced</div>
      </div>
      <div className="power__hero--badge">
        <div className="power__hero--badge--header">efficiency</div>
        <div className="power__hero--badge--body">99.8%</div>
      </div>
    </section>
  );
};

export default Hero;
