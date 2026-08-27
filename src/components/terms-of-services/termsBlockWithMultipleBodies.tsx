import ITermsBlockWithArrayBody from "@/interfaces/terms-of-services/ITermsBlockWithArrayBody";
import isIBlockBodyArray from "@/utils/legal/isIBlockBodyArray";
import Link from "next/link";

const TermsBlockWithMultipleBodies = ({
  number,
  title,
  head,
  body,
  end,
  link,
  isProhibited,
}: ITermsBlockWithArrayBody) => {
  const bodyChildClassName = isProhibited
    ? "legal__block--body--child--prohibited"
    : "legal__block--body--child";

  const bodyLinkClassName = isProhibited
    ? "legal__block--body--child--prohibited--link"
    : "legal__block--body--child--link";

  const renderBody = () => {
    if (typeof body === "string") {
      return <div className={bodyChildClassName}>{body}</div>;
    }

    if (isIBlockBodyArray(body)) {
      return body.map((item, idx) => (
        <div className={bodyChildClassName} key={idx}>
          <div className="legal__block--body--child--title">{item.title}</div>

          <div className="legal__block--body--child--text">{item.body}</div>
        </div>
      ));
    }

    return body.map((b, idx) => (
      <div className={bodyChildClassName} key={idx}>
        {link?.child === idx ? (
          <div className={bodyLinkClassName}>
            {b}
            <Link href={link.address} className="legal__block--body--link">
              {link.address}.
            </Link>
          </div>
        ) : (
          b
        )}
      </div>
    ));
  };

  return (
    <div className="legal__block">
      <div className="legal__block--title">
        <span className="legal__block--number">{number}</span>. {title}
      </div>

      {head && <div className="legal__block--head">{head}</div>}

      <div className="legal__block--body">{renderBody()}</div>

      {end && <div className="legal__block--end">{end}</div>}
    </div>
  );
};

export default TermsBlockWithMultipleBodies;
