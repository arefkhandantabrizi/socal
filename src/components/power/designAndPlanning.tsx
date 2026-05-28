"use client";

import useSquareRotation from "@/hooks/power/useSquareRotation";
import { CompassIcon, MiniBarsIcon } from "../common/icons";
import useTextTag from "@/hooks/power/useTextTag";

const DesignAndPlanning = () => {
  const { squareContainerRef, squareRef } = useSquareRotation();
  const { dotContainerRef, dotRef, dotRef2, dotRef3 } = useTextTag();
  return (
    <section className="design">
      <div className="design__text">
        <div className="design__text--label">module_01</div>
        <h2 className="design__text--header">
          design &
          <br />
          planning
        </h2>
        <p className="design__text--body">
          Conceptualizing complex power systems through multi-dimensional
          architectural blueprints and load simulation protocols.
        </p>
        <div className="design__text--spacer" />
        <div className="design__text--tags" ref={dotContainerRef}>
          <div className="design__text--tag">
            <span className="design__text--tag--dot" ref={dotRef} />
            schematic development
          </div>
          <div className="design__text--tag">
            <span className="design__text--tag--dot" ref={dotRef2} />
            load calculations
          </div>
          <div className="design__text--tag">
            <span className="design__text--tag--dot" ref={dotRef3} />
            bim integration
          </div>
        </div>
      </div>
      <div className="design__shapes">
        <div className="design__shapes--compass--wrapper">
          <div className="design__shapes--compass--frame">
            <CompassIcon className="design__shapes--compass" />
          </div>
          <h3 className="design__shapes--compass--title">phase 1: analysis</h3>
        </div>
        <div
          className="design__shapes--square--wrapper"
          ref={squareContainerRef}
        >
          <div className="design__shapes--square" ref={squareRef} />
          <h3 className="design__shapes--square--title">phase 2: topology</h3>
        </div>
        <div className="design__shapes--synthesis--wrapper">
          <MiniBarsIcon className="design__shapes--synthesis" />
          <h3 className="design__shapes--synthesis--title">
            phase 3: synthesis
          </h3>
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
    </section>
  );
};

export default DesignAndPlanning;
