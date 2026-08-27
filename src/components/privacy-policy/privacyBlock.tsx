import IPrivacyBlock from "@/interfaces/privacy-policy/IPrivacyBlock";

function PrivacyBlock({ number, title, head, body, end }: IPrivacyBlock) {
  return (
    <div className="legal__block">
      <div className="legal__block--title">
        <span className="legal__block--number">{number}</span>. {title}
      </div>
      {head && <div className="legal__block--head">{head}</div>}
      {typeof body === "string" && (
        <div className="legal__block--body">{body}</div>
      )}
      {typeof end === "string" ? (
        <div className="legal__block--end">{end}</div>
      ) : (
        end?.map((item, index) => (
          <div className="legal__block--end" key={index}>
            {item}
          </div>
        ))
      )}
    </div>
  );
}

export default PrivacyBlock;
