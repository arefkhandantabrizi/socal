import { ReactNode } from "react";

export default interface IStackCard {
  icon?: ReactNode;
  header: string;
  body: string;
  hasLabel: boolean;
  labels?: string[];
}
