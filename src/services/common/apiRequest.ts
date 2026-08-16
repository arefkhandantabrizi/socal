import IApiResponse from "@/interfaces/common/IApiResponse";
import { handleAxiosError } from "./handleAxiosError";

export async function apiRequest<T>(
  fn: () => Promise<IApiResponse<T>>,
): Promise<IApiResponse<T>> {
  try {
    const data = await fn();
    return {
      success: data.success,
      message: data.message,
      data: data.data,
    };
  } catch (error) {
    const errorMessage = handleAxiosError(error);
    return { success: false, message: errorMessage, data: null };
  }
}
