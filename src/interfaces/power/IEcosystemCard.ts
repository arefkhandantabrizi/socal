import { ReactNode } from "react";

export default interface IEcosystemCard {
  icon: ReactNode;
  header: string;
  body: string;
  labels: string[];
}
