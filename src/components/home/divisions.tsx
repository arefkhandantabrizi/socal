import {
  Calibration,
  // Compass,
  Lightning,
  // Mechanical,
  Terminal,
} from "../common/icons";
import DivisionCard from "./divisionCard";

const Divisions = () => {
  return (
    <section className="divisions">
      <h2 className="divisions__title">DIVISIONS</h2>
      <h3 className="divisions__subtitle">Operational Sectors</h3>
      <div className="divisions__cards">
        <DivisionCard
          {...{
            icon: <Terminal className="divisions__card--icon" />,
            title: "Computer",
            extraClassName: "divisions__card--1",
            bodyExtraClassName: "divisions__card--body-1",
            bodyText:
              "Full-stack industrial applications and high-fidelity web ecosystmes engineered for data density",
            hasLinks: true,
            links: ["WEB_APPLICATIONS", "INDUSTRIAL_APPS"],
            isActive: true,
          }}
        />
        <DivisionCard
          {...{
            icon: <Lightning className="divisions__card--icon" />,
            title: "Electrical",
            extraClassName: "divisions__card--2",
            bodyText:
              "Grid-scale power distribution and embedded logic systems for extreme environments.",
            hasLinks: true,
            isActive: false,
            links: ["COMMING SOON..."],
          }}
        />
        <DivisionCard
          {...{
            icon: <Calibration className="divisions__card--icon" />,
            title: "Calibration & Testing",
            extraClassName: "divisions__card--3",
            bodyText:
              "High-fidelity verification protocols and stress-testing for sub-micron component integrity across all hardware strata",
            hasLinks: true,
            isActive: false,
            links: ["COMMING SOON..."],
          }}
        />
        {/* <DivisionCard
          {...{
            icon: <Compass className="divisions__card--icon" />,
            title: "Civil",
            extraClassName: "divisions__card--3",
            bodyText:
              "Structural optimization and resilient urban framework design utilizing parametric modeing.",
            hasLinks: true,
            isActive: false,
            links: ["COMMING SOON..."],
          }}
        /> */}
        {/* <DivisionCard
          {...{
            icon: <Mechanical className="divisions__card--icon" />,
            title: "Mechanical",
            extraClassName: "divisions__card--4",
            bodyText:
              "Precision kinetic assemblies and high-tolerance machining for industrial aerospace and robotic infrastructure.",
            hasLinks: true,
            isActive: false,
            links: ["COMMING SOON..."],
          }}
        /> */}
      </div>
    </section>
  );
};

export default Divisions;
