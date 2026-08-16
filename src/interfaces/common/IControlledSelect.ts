import { Control, FieldValues } from "react-hook-form";
import ISelect from "./select";

type IControlledSelect<TItem extends { _id?: string | number }> = Omit<
  ISelect<TItem>,
  "value" | "name" | "handleChange"
> & {
  control: Control<FieldValues>;
  name: string;
};

export default IControlledSelect;
