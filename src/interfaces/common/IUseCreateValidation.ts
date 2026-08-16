import IResult from "../common/IResult";
import IApiResponse from "./IApiResponse";

export default interface IUseCreateValidation<T> {
  createdData?: IApiResponse<IResult<T>>;
  error?: string;
  toastMessage: string;
  setSendFlag?: (sendFlag: boolean) => void;
  clear(): void;
  onSuccess?: () => void;
  toggleModal?: () => void;
}
