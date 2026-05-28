"use client";

import useTextTag from "@/hooks/power/useTextTag";

const DesignText = () => {
  const { dotContainerRef, dotRef, dotRef2, dotRef3 } = useTextTag();

  return (
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
  );
};

export default DesignText;
