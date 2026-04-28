import { Lightning, Terminal } from "../common/icons";

const Divisions = () => {
  return (
    <section className="divisions">
      <h2 className="divisions__title">DIVISIONS</h2>
      <h3 className="divisions__subtitle">Operational Sectors</h3>
      <div className="divisions__cards">
        <div className="divisions__card divisions__card--1">
          <div className="divisions__card--header">
            <Terminal className="divisions__card--icon" />
          </div>
          <div className="divisions__card--title">Computer</div>
          <div className="divisions__card--body divisions__card--body-1">
            Full-stack industrial applications and high-fidelity web ecosystmes
            engineered for data density
          </div>
          <div className="divisions__card--links">
            <div className="divisions__card--link-1">
              WEB_APPLICATIONS &nbsp; &nbsp; &rarr;
            </div>
            <div className="divisions__card--link-2">
              INDUSTRIAL_APPS &nbsp; &nbsp; &rarr;
            </div>
          </div>
        </div>
        <div className="divisions__card divisions__card--2">
          <div className="divisions__card--header">
            <Lightning className="divisions__card--icon" />
          </div>
          <div className="divisions__card--title">Electrical</div>
          <div className="divisions__card--body">
            Grid-scale power distribution and embedded logic systems for extreme
            environments.
          </div>
          <div className="divisions__card--links">
            <div className="divisions__card--link-1">COMMING SOON...</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Divisions;
