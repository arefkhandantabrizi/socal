import useProtocols from "@/hooks/calibration/useProtocols";
import ProtocolCard from "./protocolCard";

const Protocols = () => {
  const { protocolCard } = useProtocols();
  return (
    <section className="protocols">
      <h2 className="protocols__header--accent">
        Strategic Validation Protocols
      </h2>
      <h2 className="protocols__header">Infrastructure Setup</h2>
      <div className="protocols__card--wrapper">
        {protocolCard.map((card, index) => {
          return (
            <ProtocolCard body={card.body} title={card.title} key={index} />
          );
        })}
      </div>
    </section>
  );
};

export default Protocols;
