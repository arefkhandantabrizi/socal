"use client";
import useServices from "@/hooks/calibration/useServices";
import ServiceCard from "./serviceCard";
import useServicesAnimation from "@/hooks/calibration/useServicesAnimation";

const Services = () => {
  const { servicesCard } = useServices();
  const {
    cardContainerRef,
    containerRef,
    cardRef0,
    cardRef1,
    cardRef2,
    cardRef3,
  } = useServicesAnimation();
  return (
    <section className="services" ref={containerRef}>
      <h2 className="services__header--accent">Operational Matrix</h2>
      <h2 className="services__header">Core Services</h2>
      <div className="services__card--wrapper" ref={cardContainerRef}>
        {servicesCard.map((card, index) => {
          return (
            <ServiceCard
              body={card.body}
              title={card.title}
              key={index}
              ref={
                index === 0
                  ? cardRef0
                  : index === 1
                    ? cardRef1
                    : index === 2
                      ? cardRef2
                      : cardRef3
              }
            />
          );
        })}
      </div>
    </section>
  );
};

export default Services;
