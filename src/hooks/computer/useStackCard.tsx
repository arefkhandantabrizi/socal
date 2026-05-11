import { JS, NeuralCore } from "@/components/common/icons";

const useStackCard = () => {
  const stacks = [
    {
      header: "HIGH_PERFORMANCE_WEB",
      body: "We architect highly performative commercials and industrial web applications, leveraging autonomous AI agents to solve complex engineering problems. Our high-fidelity stack utlizes NodeJS and Express for rebust backend orchestration, paired with React and NextJS for mission-critical frontend interfaces.",
      hasLabel: true,
      icon: <JS className="stack__card--icon" />,
      labels: ["NODEJS", "EXPRESS", "REACT", "NEXTJS"],
    },
    {
      header: "NEURAL_CORE",
      body: "Deep integration of autonomous AI architectures for complex industrial reasoning, predictive optimization, and decentralized neural logic.",
      hasLabel: false,
      icon: <NeuralCore className="stack__card--icon" />,
    },
  ];
  return { stacks };
};

export default useStackCard;
