import API from "../Constants/API";
import {
  ICheckOtpRequestedData,
  ICompleteProfileRequiredData,
  ISendOtpRequestedData,
  ISendOtpResponse,
  IUserData,
} from "../Types/Server/User";
import IApiResponse from "../Types/Shared/IApiResponse";
import http from "./HttpServices";

export const sendOtp = async (
  data: ISendOtpRequestedData
): Promise<IApiResponse<ISendOtpResponse>> => {
  return (await http.post(API.sendOtp, data)).data;
};

export const checkOtp = async (
  data: ICheckOtpRequestedData
): Promise<IApiResponse<IUserData>> => {
  return (await http.post(API.checkOtp, data)).data;
};
export const completeProfile = async (
  data: ICompleteProfileRequiredData
): Promise<IApiResponse<IUserData>> => {
  return (await http.post(API.completeProfile, data)).data;
};
