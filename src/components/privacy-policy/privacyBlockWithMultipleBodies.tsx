import IPrivacyBlock from "@/interfaces/privacy-policy/IPrivacyBlock";
import isIBlockBodyArray from "@/utils/legal/isIBlockBodyArray";
import Link from "next/link";

function PrivacyBlockWithMultipleBodies({
  number,
  title,
  head,
  body,
  end,
  link,
  isProhibited,
}: IPrivacyBlock) {
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
          <div>
            <span className="bold white">{item.title}</span> : {item.body}
          </div>
        </div>
      ));
    }

    return body.map((item, idx) => (
      <div className={bodyChildClassName} key={idx}>
        {link?.child === idx ? (
          <div className={bodyLinkClassName}>
            {item}
            <Link href={link.address} className="legal__block--body--link">
              {link.address}.
            </Link>
          </div>
        ) : (
          item
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

export default PrivacyBlockWithMultipleBodies;
