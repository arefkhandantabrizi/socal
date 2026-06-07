import useEthosText from "@/hooks/home/useEthosText";
import { MultipleConnector, RoboticArm } from "../common/icons";

const EthosText = () => {
  const { containerRef } = useEthosText();
  return (
    <div className="ethos__texts" ref={containerRef}>
      <span className="ethos__label">ETHOS_101</span>
      <h3 className="ethos__header">Architecting the</h3>
      <h3 className="ethos__subheader">future.</h3>
      <p className="ethos__body">
        {`Our engineering philosophy is rooted in the relentless pursuit of absolute precision. We don't just solve problems; we architect resilient, high-fidelity systems that define the next era of industry civilization.`}
      </p>
      <div className="ethos__icon--container">
        <div className="ethos__icon--1">
          <div className="ethos__icon--header-wrapper">
            <RoboticArm className="ethos__icon" />
            <span className="ethos__icon--header">HIGH_TOLERANCE</span>
          </div>
          <div className="ethos__icon--body">
            Every component is engineered to sub-micron tolerances, ensuring
            peak performance under extreme operational stress.
          </div>
        </div>
        <div className="ethos__icon--2">
          <div className="ethos__icon--header-wrapper">
            <MultipleConnector className="ethos__icon" />
            <span className="ethos__icon--header">MULTI-DISCIPLINARY</span>
          </div>
          <div className="ethos__icon--body">
            Cross-sector synthesis between electrical and computational logic to
            create unified infrastructure.
          </div>
        </div>
      </div>
    </div>
  );
};

export default EthosText;
