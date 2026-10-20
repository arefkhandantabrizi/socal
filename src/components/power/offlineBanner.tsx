"use client";
import useIndicator from "@/hooks/common/useIndicator";
import { Info, LeftArrow, Lock } from "../common/icons";
import useNavigateTo from "@/hooks/common/useNavigate";

const OfflineBanner = () => {
  const { containerRef, indicatorRef } = useIndicator();
  const { handleNavigate } = useNavigateTo();

  return (
    <section className="power__offline" ref={containerRef}>
      <div className="power__offline--badge">
        <span className="power__offline--badge--indicator" ref={indicatorRef} />
        <div className="power__offline--badge--subtext">status</div>
        <div className="power__offline--badge--text">offline</div>
      </div>
      <div className="power__offline--header">
        <Lock className="power__offline--header--icon" />
        <h3 className="power__offline--header--text">
          department pre-operational notice
        </h3>
      </div>
      <p className="power__offline--body">
        This section is currently for preview and demonstration purposes only.
        Live electrical engineering services, load simulations, solar PV design,
        and system diagnostics are not currently active or operational.
      </p>
      <div className="power__offline--info">
        <Info className="power__offline--info--icon" />
        <p className="power__offline--info--text">
          Data submissions, inquiry transmissions, and engineering service
          requests for this sector are temporarily disabled.
        </p>
      </div>
      <div className="power__offline--btn--wrapper">
        <button
          className="power__offline--btn"
          onClick={() => handleNavigate("/")}
        >
          <LeftArrow className="power__offline--btn--icon" />
          go to active sectors
        </button>
      </div>
    </section>
  );
};

export default OfflineBanner;
