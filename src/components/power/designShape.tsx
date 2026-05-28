"use client";
import useSquareRotation from "@/hooks/power/useSquareRotation";
import { CompassIcon, MiniBarsIcon } from "../common/icons";

const DesignShape = () => {
  const { squareContainerRef, squareRef } = useSquareRotation();

  return (
    <div className="design__shapes">
      <div className="design__shapes--compass--wrapper">
        <div className="design__shapes--compass--frame">
          <CompassIcon className="design__shapes--compass" />
        </div>
        <h3 className="design__shapes--compass--title">phase 1: analysis</h3>
      </div>
      <div className="design__shapes--square--wrapper" ref={squareContainerRef}>
        <div className="design__shapes--square" ref={squareRef} />
        <h3 className="design__shapes--square--title">phase 2: topology</h3>
      </div>
      <div className="design__shapes--synthesis--wrapper">
        <MiniBarsIcon className="design__shapes--synthesis" />
        <h3 className="design__shapes--synthesis--title">phase 3: synthesis</h3>
      </div>
      <div className="design__shapes--deployment--wrapper">
        <div className="design__shapes--deployment--texts">
          <div className="design__shapes--deployment--text">
            system_check: ok
          </div>
          <div className="design__shapes--deployment--text">
            load_bal: optimal
          </div>
          <div className="design__shapes--deployment--text">
            latency: 0.04ms
          </div>
        </div>
        <h3 className="design__shapes--deployment--title">
          phase 4: deployment
        </h3>
      </div>
    </div>
  );
};

export default DesignShape;
