export default interface ISelectDropdownProps<T> {
  name: string;
  value: string | boolean;
  optionText?: string;
  data: T[];
  dataField?: string;
  desiredValue?: string;
  handleChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
