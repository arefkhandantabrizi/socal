import { MouseEvent } from "react";

export default interface IButtonWithSearch {
  loadingCondition: boolean;
  disabled?: boolean;
  label: string;
  type?: "button" | "submit" | "reset";
  extraClassName?: string;
  cta?: (e: MouseEvent<HTMLButtonElement>) => void;
}
