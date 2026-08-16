import IApiResponse from "@/interfaces/common/IApiResponse";
import IResult from "@/interfaces/common/IResult";
import { apiRequest } from "../common/apiRequest";
import mainAPI from "..";
import IAddAboutUs from "@/interfaces/about-us/IAddAboutUs";
import IAboutUs from "@/interfaces/about-us/IAboutUs";

const route = "api/about-us";

export const addAboutUs = (
  data: IAddAboutUs,
): Promise<IApiResponse<IResult<IAboutUs>>> => {
  return apiRequest<IResult<IAboutUs>>(async () => {
    const response = await mainAPI.post(`${route}`, data, {
      withCredentials: true,
    });
    return response.data;
  });
};
