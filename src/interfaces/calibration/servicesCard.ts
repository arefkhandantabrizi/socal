import { RefObject } from "react";

export default interface IServicesCard {
  title: string;
  body: string;
  ref?: RefObject<HTMLDivElement | null>;
}
