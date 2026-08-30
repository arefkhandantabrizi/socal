"use client";
import useIndicator from "@/hooks/common/useIndicator";
import { LeftArrow } from "../common/icons";
import useNavigateTo from "@/hooks/common/useNavigate";

const SubText = () => {
  const { containerRef: indicatorContainer, indicatorRef } = useIndicator();
  const { handleNavigate } = useNavigateTo();

  return (
    <section className="notFound__subText--wrapper">
      <div className="notFound__subText" ref={indicatorContainer}>
        <span className="notFound__subText--indicator" ref={indicatorRef} />
        ERROR_CODE: NULL_POINTER // COORDINATES_NOT_FOUND
      </div>
      <p className="notFound__subText--body">
        The requested sector has been decommissioned or moved outside the
        current architectural blueprint. Verify the schematic parameters and
        attempt recalibration.
      </p>
      <button
        className="notFound__subText--btn"
        onClick={() => handleNavigate("/")}
      >
        <LeftArrow className="notFound__subText--icon" />
        back to control mission
      </button>
    </section>
  );
};

export default SubText;
