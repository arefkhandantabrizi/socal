import { Equalizer, Lightning, Terminal } from "@/components/common/icons";
import IPillarCard from "@/interfaces/about-us/pillarCard";

const usePillarCard = () => {
  const cards: IPillarCard[] = [
    {
      icon: <Terminal className="pillar__card--icon" />,
      header: "Computer",
      body: "Neural-link command systems and computational logic for autonomous industrial clusters.",
    },
    {
      icon: <Lightning className="pillar__card--icon" />,
      header: "power",
      body: "Grid-scale energy synthesis and distribution infrastructures engineered for high tolerance.",
    },
    {
      icon: <Equalizer className="pillar__card--icon" />,
      header: "system engineering & calibration",
      body: "Absolute precision mapping, sensor-array synchronization, and unified calibration protocols",
    },
  ];
  return { cards };
};

export default usePillarCard;
