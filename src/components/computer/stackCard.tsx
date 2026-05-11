import IStackCard from "@/interfaces/computer/stackCard";

const StackCard = ({ icon, header, body, hasLabel, labels }: IStackCard) => {
  return (
    <div className="stack__card">
      {icon}
      <div className="stack__card--header">{header}</div>
      <div className="stack__card--body">{body}</div>
      {hasLabel && (
        <div className="stack__card--labelwrapper">
          {labels?.map((label, i) => {
            return (
              <div key={i} className="stack__card--label">
                {label}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default StackCard;
