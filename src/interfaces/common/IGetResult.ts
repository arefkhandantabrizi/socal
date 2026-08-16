export default interface IGetResult<T> {
  data: T[];
  pageNumbers: number;
  totalData: number;
  page: number;
  limit: number;
}
