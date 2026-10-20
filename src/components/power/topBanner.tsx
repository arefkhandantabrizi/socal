"use client";
import useIndicator from "@/hooks/common/useIndicator";
import { Caution } from "../common/icons";

const TopBanner = () => {
  const { containerRef, indicatorRef } = useIndicator();
  return (
    <section className="power__banner" ref={containerRef}>
      <span className="power__banner--indicator" ref={indicatorRef} />
      <Caution className="power__banner--icon" />
      <p className="power__banner--text">
        SYSTEM NOTICE: ELECTRICAL / POWER ENGINEERING DEPARTMENT IS CURRENTLY
        NON-FUNCTIONAL // PRE-COMMISSIONING STAGE. SERVICES WILL COMMENCE
        POST-REGULATORY LICENSURE.
      </p>
    </section>
  );
};

export default TopBanner;
