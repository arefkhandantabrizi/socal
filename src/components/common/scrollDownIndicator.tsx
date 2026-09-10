import IScrollDownIndicator from "@/interfaces/common/IScrollDownIndicator";
import ScrollDown from "./icons/scrollDown";

const ScrollDownIndicator = ({
  indicatorRef,
  chevronRef,
}: IScrollDownIndicator) => {
  return (
    <div ref={indicatorRef} className="scrollDownIndicator">
      <span className="scrollDownIndicator__text">SCROLL DOWN</span>

      <div ref={chevronRef} className="scrollDownIndicator__chevron">
        <ScrollDown className="scrollDownIndicator__chevron--icon" />
      </div>
    </div>
  );
};

export default ScrollDownIndicator;
