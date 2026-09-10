import { Calibration, Lightning, Terminal } from "@/components/common/icons";

import IDivisionCard from "@/interfaces/home/divisionCard";

const useDivisions = () => {
  const cards: IDivisionCard[] = [
    {
      icon: <Terminal className="divisions__floating-icon--svg" />,
      title: "Computer",
      bodyExtraClassName: "divisions__card--body-1",
      bodyText:
        "Custom React/Next.js platforms, Node backend services, and autonomous AI integrations engineered for resilient throughput.",
      hasLinks: true,
      links: ["WEB_APPLICATIONS", "INDUSTRIAL_APPS"],
      isActive: true,
    },
    {
      icon: <Lightning className="divisions__floating-icon--svg" />,
      title: "Power",
      bodyText:
        "Grid-scale renewable infrastructure, high-voltage system architecture, and specialized engineering studies delivered with rigorous precision from concept through commissioning.",
      hasLinks: true,
      isActive: false,
      links: ["COMING SOON..."],
    },
    {
      icon: <Calibration className="divisions__floating-icon--svg" />,
      title: "System Engineering & Calibration",
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
