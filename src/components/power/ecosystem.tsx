import { LeftChevron, RightChevron } from "../common/icons";
import useEcosystem from "@/hooks/power/useEcosystem";

const Ecosystem = () => {
  const { ecosystemCards, carouselRef, scrollLeft, scrollRight } =
    useEcosystem();
  return (
    <section className="ecosystem">
      <div className="ecosystem__label">integrated_divisions</div>
      <div className="ecosystem__header--wrapper">
        <h3 className="ecosystem__header">power engineering ecosystem</h3>
        <div className="ecosystem__header--icon--wrappers">
          <div
            className="ecosystem__header--icon--wrapper"
            onClick={scrollLeft}
          >
            <LeftChevron className="ecosystem__header--icon" />
          </div>
          <div
            className="ecosystem__header--icon--wrapper"
            onClick={scrollRight}
          >
            <RightChevron className="ecosystem__header--icon" />
          </div>
        </div>
      </div>

      <div ref={carouselRef} className="ecosystem__carousel">
        <div className="ecosystem__carousel--items">
          {ecosystemCards.map((card, idx) => {
            return (
              <div key={idx} className="ecosystem__carousel--item">
                <div className="ecosystem__carousel--item--header--wrapper">
                  <h4 className="ecosystem__carousel--item--header">
                    {card.header}
                  </h4>
                  <div className="ecosystem__carousel--item--icon--wrapper">
                    {card.icon}
                  </div>
                </div>
                <div className="ecosystem__carousel--item--separator" />
                <p className="ecosystem__carousel--item--body">{card.body}</p>
                <div className="ecosystem__carousel--item--separator" />

                <div className="ecosystem__carousel--item--label--wrapper">
                  {card.labels.map((label, index) => {
                    return (
                      <div
                        key={index}
                        className="ecosystem__carousel--item--label"
                      >
                        {label}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
