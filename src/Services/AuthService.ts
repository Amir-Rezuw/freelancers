import API from "../Constants/API";
import { ISendOtpRequestedData, ISendOtpResponse } from "../Types/Server/User";
import IApiResponse from "../Types/Shared/IApiResponse";
import http from "./HttpServices";

export const sendOtp = (
  data: ISendOtpRequestedData
): Promise<IApiResponse<ISendOtpResponse>> => {
  return http.post(API.sendOtp, data);
};

export const checkOtp = (data: string) => {
  return http.post(API.checkOtp, data);
};
