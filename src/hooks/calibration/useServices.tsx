import IServicesCard from "@/interfaces/calibration/servicesCard";

const useServices = () => {
  const servicesCard: IServicesCard[] = [
    {
      title: "Hardware-Software Integration",
      body: "Seamless bridge between physical kinetic assets and neural command layers via high-speed interfaces.",
    },
    {
      title: "Automation Stands Design",
      body: "Custom fabrication of stress-testing rigs designed for multi-axis kinetic endurance protocols.",
    },
    {
      title: "On-Site Calibration",
      body: "Global deployment of calibration squads for immediate hardware recalibration in active sites.",
    },
    {
      title: "NIST Calibration",
      body: "Rigorous adherence to atomic-level standards ensuring total compliance with global safety frameworks.",
    },
  ];
  return { servicesCard };
};

export default useServices;
