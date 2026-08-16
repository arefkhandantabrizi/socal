import { AxiosError } from "axios";

export function handleAxiosError(error: unknown): string {
  if ((error as AxiosError).isAxiosError) {
    const axiosError = error as AxiosError;
    const responseData = axiosError.response?.data;

    if (typeof responseData === "string") {
      return responseData.replace("Axios error: ", "");
    }

    if (
      responseData &&
      typeof responseData === "object" &&
      "message" in responseData &&
      typeof responseData.message === "string"
    ) {
      return responseData.message;
    }

    return axiosError.message || "There is a problem please try later.";
  }

  console.error("Unexpected error:", error);
  return "Our technical team is working on the problem.";
}
