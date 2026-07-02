import { useRef } from "react";
import gsap from "@/utils/gsap";
import {
  Auction,
  CompassIcon,
  Consulting,
  SolarPanel,
  Statistics,
  Support,
} from "@/components/common/icons";
import IEcosystemCard from "@/interfaces/power/IEcosystemCard";

const useEcosystem = () => {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const scrollAmount = 450;

  const scrollRight = () => {
    if (!carouselRef.current) return;

    gsap.to(carouselRef.current, {
      scrollLeft: carouselRef.current.scrollLeft + scrollAmount,
      duration: 1.1,
      ease: "power4.inOut",
    });
  };

  const scrollLeft = () => {
    if (!carouselRef.current) return;

    gsap.to(carouselRef.current, {
      scrollLeft: carouselRef.current.scrollLeft - scrollAmount,
      duration: 1.1,
      ease: "power4.inOut",
    });
  };

  const ecosystemCards: IEcosystemCard[] = [
    {
      icon: <CompassIcon className="ecosystem__carousel--icon" />,
      header: "design & planning",
      body: "Multi-dimensional architectural blueprints and load simulation protocols for grid-scale infrastructures.",
      labels: [
        "Electrical System Design",
        "Load Calculations",
        "Panel & Distribution Design",
        "One-Line Diagrams",
        "Power Layout & Equipment Sizing",
        "ADU Electrical Design",
        "Service Upgrade Design",
        "EV Charger Design",
        "Tenant Improvement Design",
      ],
    },
    {
      icon: <SolarPanel className="ecosystem__carousel--icon" />,
      header: "solar & energy",
      body: "Utility-scale PV arrays and battery storage integration for industrial-grade renewable ecosystems.",
      labels: [
        "Solar PV Design",
        "Solar Plan Set",
        "Battery Storage Systems",
        "Interconnection Support ",
        "Off-Grid Systems",
      ],
    },
    {
      icon: <Statistics className="ecosystem__carousel--icon" />,
      header: "studies & analysis",
      body: "Real-time thermal profiling and electromagnetic interference mapping for high-density corridors.",
      labels: [
        "Arc Flash Study",
        "Short Circuit Study",
        "Protection & Coordination",
        "Load Flow Analysis",
        "ower Quality Analysis",
        "Fault Duty Evaluation",
      ],
    },
    {
      icon: <Auction className="ecosystem__carousel--icon" />,
      header: "compliance & code",
      body: "Ensuring all installations exceed IEEE and NEC standards with absolute safety integrity.",
      labels: [
        "Title 24 Compliance",
        "NEC Review",
        "Plan Review",
        "Permit Support",
        "ADU Plan Review",
        "Lighting Design",
      ],
    },
    {
      icon: <Support className="ecosystem__carousel--icon" />,
      header: "field support",
      body: "On-site diagnosis and live grid restoration services for critical power infrastructure.",
      labels: [
        "Site Inspection",
        "Construction Support",
        "Commissioning",
        "Troubleshooting",
        "As-Built Drawings",
      ],
    },
    {
      icon: <Consulting className="ecosystem__carousel--icon" />,
      header: "power system consulting",
      body: "Strategic oversight and technical conscience for global energy stakeholders and investors.",
      labels: [
        "Power System Consulting",
        "Design Review",
        "Contractor Support",
        "Engineering Reports",
        "Grounding Design",
        "Distribution Upgrades",
      ],
    },
  ];

  return { ecosystemCards, carouselRef, scrollRight, scrollLeft };
};

export default useEcosystem;
