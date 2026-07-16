import { IProtocolsCards } from "@/interfaces/calibration/protocolCard";

const ProtocolCard = ({ title, body }: IProtocolsCards) => {
  return (
    <div className="protocols__card">
      <h3 className="protocols__card--header">{title}</h3>
      <h3 className="protocols__card--body">{body}</h3>
    </div>
  );
};

export default ProtocolCard;
