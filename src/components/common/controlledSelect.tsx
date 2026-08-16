import { Controller } from "react-hook-form";
import type { Control, FieldValues, FieldPath } from "react-hook-form";
import CustomSelect from "./customSelect";
import type ISelect from "@/interfaces/common/select";

type ControlledSelectProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
  TItem extends { _id?: string | number },
> = Omit<ISelect<TItem>, "value" | "name" | "handleChange"> & {
  control: Control<TFieldValues>;
  name: TName;
};

const ControlledSelect = <
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
  TItem extends { _id?: string | number },
>({
  control,
  name,
  ...selectProps
}: ControlledSelectProps<TFieldValues, TName, TItem>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <CustomSelect<TItem>
          {...selectProps}
          name={field.name}
          value={field.value}
          handleChange={(e) => field.onChange(e.target.value)}
        />
      )}
    />
  );
};

export default ControlledSelect;
