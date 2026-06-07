import IDivisionCard from "@/interfaces/home/divisionCard";

const DivisionCard = ({
  title,
  bodyText,
  links,
  icon,
  index,
  panelRef,
}: IDivisionCard) => {
  return (
    <div className="divisions__panel" ref={panelRef}>
      <div className="divisions__visual">
        <div className="divisions__visual--box">{icon}</div>
      </div>

      <div className="divisions__content">
        <div className="divisions__label">
          SECTOR_0{index === undefined ? 1 : index + 1}
        </div>

        <h2 className="divisions__title">{title}</h2>

        <p className="divisions__body">{bodyText}</p>

        <div className="divisions__links">
          {links?.map((link, i) => (
            <div key={i}>{link}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DivisionCard;
