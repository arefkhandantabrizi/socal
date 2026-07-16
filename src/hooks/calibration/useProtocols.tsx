import { IProtocolsCards } from "@/interfaces/calibration/protocolCard";

const useProtocols = () => {
  const protocolCard: IProtocolsCards[] = [
    {
      title: "Facility Integration",
      body: "Architecting high-fidelity physical environments for seamless hardware-to-grid synchronization.",
    },
    {
      title: "Custom Rig Development",
      body: "Engineering multi-axis kinetic testing rigs with sub-micron tolerance for extreme stress analysis.",
    },
    {
      title: "Baseline Synchronization",
      body: "Establishing absolute precision benchmarks across distributed computational and mechanical nodes.",
    },
    {
      title: "Certification Mapping",
      body: "Aligning infrastructure with global safety frameworks and NIST-grade compliance standards.",
    },
  ];
  return { protocolCard };
};

export default useProtocols;
