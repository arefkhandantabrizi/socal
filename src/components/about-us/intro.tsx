import Image from "next/image";

const Intro = () => {
  return (
    <section className="aboutUs__intro">
      <div className="aboutUs__intro--image--wrapper">
        <Image
          fill
          preload
          src={"/about-us.webp"}
          alt="about us hero image"
          className="aboutUs__intro--image"
        />

        <div className="aboutUs__intro--text">
          <div className="aboutUs__intro--label">Architectural Integrity</div>
          <h2 className="aboutUs__intro--heading">Architecting</h2>
          <h2 className="aboutUs__intro--heading aboutUs__intro--heading--accent">
            Industrial
          </h2>
          <h2 className="aboutUs__intro--heading">Truth</h2>
          <p className="aboutUs__intro--body">
            Our engineering philosophy is rooted in the relentless pursuit of
            absolute precision. We don&apos;t just solve problems; we architect
            resilient, high-fidelity systems that define the next era of
            industrial civilization.
          </p>
          <div className="aboutUs__intro--btn--wrapper">
            <button className="aboutUs__intro--btn">initialize project</button>
            <button className="aboutUs__intro--btn--outline">
              schedule a meeting
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
