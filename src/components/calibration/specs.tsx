import { CheckSheild } from "../common/icons";

const Specs = () => {
  return (
    <section className="specs">
      <div className="specs__card">
        <h4 className="specs__card--header">Engineering Specs</h4>
        <h4 className="specs__card--subheader">Technical Specifications</h4>
        <div className="specs__card--row">
          <div className="specs__card--title">Tolerance Level</div>
          <div className="specs__card--value">± 0.00001μm</div>
        </div>
        <div className="specs__card--row">
          <div className="specs__card--title">Frequency Range</div>
          <div className="specs__card--value">0.5Hz — 2.4GHz</div>
        </div>
        <div className="specs__card--row">
          <div className="specs__card--title">Thermal Resistance</div>
          <div className="specs__card--value">-120°C / +450°C</div>
        </div>
        <div className="specs__card--row">
          <div className="specs__card--title">Data Throughput</div>
          <div className="specs__card--value">400 GB/s</div>
        </div>
      </div>
      <div className="specs__card--status">
        <h4 className="specs__card--header">Regulatory Status</h4>
        <h4 className="specs__card--subheader">Compliance Protocol</h4>
        <div className="specs__card--status--row">
          <CheckSheild className="specs__card--icon" />
          <div className="specs__card--status--title">
            ISO-9001:2024 ARCHITECT
          </div>
          <div className="specs__card--status--body">
            Certification for quality management in high-kinetic manufacturing.
          </div>
        </div>
        <div className="specs__card--status--row">
          <CheckSheild className="specs__card--icon" />
          <div className="specs__card--status--title">
            NIST SPECIAL PUB 800-171
          </div>
          <div className="specs__card--status--body">
            Defense-grade cybersecurity and data protection standards.
          </div>
        </div>
        <div className="specs__card--status--row">
          <CheckSheild className="specs__card--icon" />
          <div className="specs__card--status--title">MIL-SPEC INTEGRATION</div>
          <div className="specs__card--status--body">
            Battle-ready environmental resistance and precision hardware.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specs;
