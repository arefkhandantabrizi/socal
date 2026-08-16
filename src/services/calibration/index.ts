import IAddCalibration from "@/interfaces/calibration/IAddCalibration";
import ICalibration from "@/interfaces/calibration/ICalibration";
import IApiResponse from "@/interfaces/common/IApiResponse";
import IResult from "@/interfaces/common/IResult";
import { apiRequest } from "../common/apiRequest";
import mainAPI from "..";

const route = "api/calibration";

export const addCalibration = (
  data: IAddCalibration,
): Promise<IApiResponse<IResult<ICalibration>>> => {
  return apiRequest<IResult<ICalibration>>(async () => {
    const response = await mainAPI.post(`${route}`, data, {
      withCredentials: true,
    });
    return response.data;
  });
};
