export default interface ISelect<T extends { _id?: string | number }> {
  name: string;
  value: string | boolean;
  optionText?: string;
  data: T[];
  dataField?: string;
  desiredValue?: string;
  isDisabled?: boolean;
  needUsername?: boolean;
  handleChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
