import { Calibration, Lightning, Terminal } from "@/components/common/icons";

import IDivisionCard from "@/interfaces/home/divisionCard";

const useDivisions = () => {
  const cards: IDivisionCard[] = [
    {
      icon: <Terminal className="divisions__floating-icon--svg" />,
      title: "Computer",
      bodyExtraClassName: "divisions__card--body-1",
      bodyText:
        "Full-stack industrial applications and high-fidelity web ecosystems engineered for data density.",
      hasLinks: true,
      links: ["WEB_APPLICATIONS", "INDUSTRIAL_APPS"],
      isActive: true,
    },
    {
      icon: <Lightning className="divisions__floating-icon--svg" />,
      title: "Electrical",
      bodyText:
        "Grid-scale power distribution and embedded logic systems for extreme environments.",
      hasLinks: true,
      isActive: false,
      links: ["COMING SOON..."],
    },
    {
      icon: <Calibration className="divisions__floating-icon--svg" />,
      title: "Calibration & Testing",
      bodyText:
        "High-fidelity verification protocols and stress-testing for sub-micron component integrity across all hardware strata.",
      hasLinks: true,
      isActive: false,
      links: ["COMING SOON..."],
    },
  ];

  return { cards };
};

export default useDivisions;
