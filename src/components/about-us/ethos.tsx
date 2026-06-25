import Image from "next/image";

const Ethos = () => {
  return (
    <section className="aboutUs__ethos">
      <div className="aboutUs__ethos--one">
        <h3 className="aboutUs__ethos--one--label">ETHOS 01</h3>
        <h3 className="aboutUs__ethos--one--header">High Tolerance</h3>
        <p className="aboutUs__ethos--one--body">
          We build for the edge cases. Our systems are tested under conditions
          that would simulate the collapse of standard infrastructures.
        </p>
        <div className="aboutUs__ethos--one--image--wrapper">
          <Image
            src={"/ethos1.webp"}
            alt="ethos one image"
            className="aboutUs__ethos--one--image"
            width={600}
            height={260}
          />
        </div>
      </div>
      <div className="aboutUs__ethos--two">
        <h3 className="aboutUs__ethos--two--label">ETHOS 02</h3>
        <h3 className="aboutUs__ethos--two--header">Engineered Intelligence</h3>
        <p className="aboutUs__ethos--two--body">
          Automation is not enough. We implement cognitive architectures that
          learn from the physical stresses of the environment.
        </p>
        <div className="aboutUs__ethos--two--image--wrapper">
          <Image
            src={"/ethos2.webp"}
            alt="ethos two image"
            className="aboutUs__ethos--two--image"
            width={600}
            height={260}
          />
        </div>
      </div>
    </section>
  );
};

export default Ethos;
