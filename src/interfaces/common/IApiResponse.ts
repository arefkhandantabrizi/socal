export default interface IApiResponse<T> {
  success: boolean;
  data: T | null;
  message: string;
  code?: string;
}
