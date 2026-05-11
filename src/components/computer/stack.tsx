import useStackCard from "@/hooks/computer/useStackCard";
import StackCard from "./stackCard";
import Image from "next/image";

const Stack = () => {
  const { stacks } = useStackCard();
  return (
    <section className="stack">
      <h2 className="stack__header">SYSTEM_ARCHITECTURE</h2>
      <h2 className="stack__subheader">THE_STACK</h2>
      <div className="stack__cardwrapper">
        {stacks.map((card, index) => {
          return (
            <StackCard
              key={index}
              {...{
                header: card.header,
                body: card.body,
                hasLabel: card.hasLabel,
                icon: card.icon,
                labels: card.labels,
              }}
            />
          );
        })}
      </div>
      <div className="stack__imagewrapper">
        <Image
          src={"/stack.webp"}
          alt="stack image"
          className="stack__image"
          //   objectFit="contain"
          fill
          preload
        />
      </div>
    </section>
  );
};

export default Stack;
