"use client";
import useInput from "@/hooks/calibration/useInput";
import useTransmissionAnimation from "@/hooks/calibration/useTransmissionAnimation";

const Transmission = () => {
  const { disable, email, handleChange, jobDesc } = useInput();
  const { containerRef } = useTransmissionAnimation();
  return (
    <section className="calibration__transmission" ref={containerRef}>
      <div className="calibration__transmission--form--outer">
        <div className="calibration__transmission--text">
          <h5 className="calibration__transmission--header">Initialize</h5>
          <h5 className="calibration__transmission--header--accent">
            connection
          </h5>
          <p className="calibration__transmission--body">
            Deploy our calibration architecture to your facility. Secure, fast,
            and precise protocols for mission-critical hardware.
          </p>
          <div className="calibration__transmission--label--wrapper">
            <div className="calibration__transmission--label">
              <div className="calibration__transmission--label--header">
                Uplink Code
              </div>
              <div className="calibration__transmission--label--body">
                socal-7720
              </div>
            </div>
            <div className="calibration__transmission--label">
              <div className="calibration__transmission--label--header">
                Protocol
              </div>
              <div className="calibration__transmission--label--body">
                SECURE-QUANTUM
              </div>
            </div>
          </div>
        </div>
        <div className="calibration__transmission--form">
          <div className="calibration__transmission--form--wrapper">
            <label
              htmlFor="email"
              className="calibration__transmission--form--label"
            >
              Access Key (Email)
            </label>
            <input
              id="email"
              type="text"
              className="input calibration__transmission--form--input"
              placeholder="operator@nexsus-ops.sh"
              value={email}
              onChange={handleChange}
            />
          </div>
          <div className="calibration__transmission--form--wrapper">
            <label
              htmlFor="jobDesc"
              className="calibration__transmission--form--label"
            >
              Transmission Header
            </label>
            <textarea
              id="jobDesc"
              className="textArea calibration__transmission--form--text"
              placeholder="Outline specific hardware requirements..."
              value={jobDesc}
              onChange={handleChange}
            />
          </div>
          <div className="calibration__transmission--form--wrapper">
            <button
              className="calibration__transmission--form--btn"
              disabled={disable}
            >
              Establish Link
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transmission;
