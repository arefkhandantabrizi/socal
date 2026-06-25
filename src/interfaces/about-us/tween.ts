import { RefObject } from "react";

export default interface ITween {
  containerAnimationRef?: RefObject<GSAPTween | null>;
}
