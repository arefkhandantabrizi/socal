import { SolarPanel } from "../common/icons";
import useSolarTilt from "@/hooks/power/useSolarTilt";
import useSolarAnalysisAnimation from "@/hooks/power/useSolarAnalysisAnimation";

const Solar = () => {
  const {
    solarCardRef,
    analysisCardRef,
    solarIconWrapperRef,
    solarCardEvents,
    analysisCardEvents,
  } = useSolarTilt();

  const {
    analysisRef,
    indicatorRef,
    harmonicFillRef,
    flowFillRef,
    flowTextRef,
    harmonicTextRef,
  } = useSolarAnalysisAnimation();

  const setAnalysisRefs = (node: HTMLDivElement | null) => {
    analysisRef.current = node;
    analysisCardRef.current = node;
  };

  return (
    <section className="solar">
      <div className="solar__cards">
        <div ref={solarCardRef} className="solar__card" {...solarCardEvents}>
          <div ref={solarIconWrapperRef} className="solar__card--icon--wrapper">
            <SolarPanel className="solar__card--icon" />
          </div>

          <div className="solar__card--label">spec_ref: e-solar</div>

          <h3 className="solar__card--header">
            solar & energy <br /> systems
          </h3>

          <div className="solar__card--body">
            Engineering future-proof renewable ecosystems. We specialize in
            utility-scale PV arrays, battery storage integration, and smart-grid
            synchronization for industrial deployments
          </div>

          <div className="solar__card--btn--wrapper">
            <button className="solar__card--btn">schedule a meeting</button>
            <button className="solar__card--btn--outline">about us</button>
          </div>
        </div>

        <div
          ref={setAnalysisRefs}
          className="solar__analysis"
          {...analysisCardEvents}
        >
          <div className="solar__analysis--label--wrapper">
            <span
              ref={indicatorRef}
              className="solar__analysis--label--indicator"
            />
            <div className="solar__analysis--label">active_analysis</div>
          </div>
          <h3 className="solar__analysis--header">
            studies & <br /> analysis
          </h3>
          <div className="solar__analysis--bars">
            <div className="solar__analysis--bar--wrapper">
              <div className="solar__analysis--bar--header">
                <span className="solar__analysis--bar--title">
                  harmonic distortion
                </span>
                <span
                  className="solar__analysis--bar--label"
                  ref={harmonicTextRef}
                >
                  0.03%
                </span>
              </div>

              <div className="solar__analysis--bar">
                <div
                  ref={harmonicFillRef}
                  className="solar__analysis--bar--fill solar__analysis--bar--fill-harmonic"
                />
              </div>
            </div>
            <div className="solar__analysis--bar--wrapper">
              <div className="solar__analysis--bar--header">
                <span className="solar__analysis--bar--title">
                  short circuit flow
                </span>
                <span className="solar__analysis--bar--label" ref={flowTextRef}>
                  stable
                </span>
              </div>

              <div className="solar__analysis--bar">
                <div
                  ref={flowFillRef}
                  className="solar__analysis--bar--fill solar__analysis--bar--fill-flow"
                />
              </div>
            </div>
          </div>
          <div className="solar__analysis--quote">
            {`"Real-time thermal profiling and electromagnetic interference mapping for high-density industrial corridors."`}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solar;
