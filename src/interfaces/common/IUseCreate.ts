import IApiResponse from "./IApiResponse";
import ICreateResult from "./IResult";

export default interface IUseCreate<T, K> {
  addFn: (data: K) => Promise<IApiResponse<ICreateResult<T>>>;
}
