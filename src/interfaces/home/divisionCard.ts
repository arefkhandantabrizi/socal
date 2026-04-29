import { ReactNode } from "react";

export default interface IDivisionCard {
  extraClassName: string;
  icon: ReactNode;
  title: string;
  bodyExtraClassName?: string;
  bodyText: string;
  hasLinks: boolean;
  links?: string[];
  isActive: boolean;
}
