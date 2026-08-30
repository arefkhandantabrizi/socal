import Image from "next/image";

const Hero = () => {
  return (
    <section className="notFound__hero">
      <div className="notFound__hero--image--wrapper">
        <Image
          priority
          src={"/notFound.webp"}
          alt="not found image"
          className="notFound__hero--image"
          width={700}
          height={350}
        />
      </div>
    </section>
  );
};

export default Hero;
