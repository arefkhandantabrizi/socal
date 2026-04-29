import IDivisionCard from "@/interfaces/home/divisionCard";

const DivisionCard = ({
  title,
  extraClassName,
  bodyExtraClassName,
  bodyText,
  hasLinks,
  links,
  icon,
  isActive,
}: IDivisionCard) => {
  return (
    <div className={`divisions__card ${extraClassName}`}>
      <div className="divisions__card--header">{icon}</div>
      <div className="divisions__card--title">{title}</div>
      <div className={`divisions__card--body ${bodyExtraClassName}`}>
        {bodyText}
      </div>
      {hasLinks && (
        <div className="divisions__card--links">
          {links?.map((l, i) => {
            return isActive ? (
              <div key={i} className={`divisions__card--link-${i + 1}`}>
                {l} &nbsp; &nbsp; &rarr;
              </div>
            ) : (
              <div key={i} className={`divisions__card--link-${i + 1}`}>
                {l}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DivisionCard;
