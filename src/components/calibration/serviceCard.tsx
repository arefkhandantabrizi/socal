import IServicesCard from "@/interfaces/calibration/servicesCard";

const ServiceCard = ({ title, body, ref }: IServicesCard) => {
  return (
    <div className="services__card" ref={ref}>
      <h3 className="services__card--header">{title}</h3>
      <h3 className="services__card--body">{body}</h3>
    </div>
  );
};

export default ServiceCard;
