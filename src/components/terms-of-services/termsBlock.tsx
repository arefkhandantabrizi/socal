import ITermsBlock from "@/interfaces/terms-of-services/ITermsBlock";

function TermsBlock({ number, title, head, body, end }: ITermsBlock) {
  return (
    <div className="legal__block">
      <div className="legal__block--title">
        <span className="legal__block--number">{number}</span>. {title}
      </div>
      {head && <div className="legal__block--head">{head}</div>}
      {typeof body === "string" && (
        <div className="legal__block--body">{body}</div>
      )}
      {end && <div className="legal__block--end">{end}</div>}
    </div>
  );
}

export default TermsBlock;
