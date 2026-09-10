import { RefObject } from "react";

export default interface IScrollDownIndicator {
  indicatorRef: RefObject<HTMLDivElement | null>;
  chevronRef: RefObject<HTMLDivElement | null>;
}
