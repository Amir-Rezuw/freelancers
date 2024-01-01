import API from "../Constants/API";
import {
  ICheckOtpRequestedData,
  ICompleteProfileRequiredData,
  ISendOtpRequestedData,
  ISendOtpResponse,
  IUserData,
  IUserProfile,
} from "../Types/Server/User";
import { Success } from "../Types/Shared/IApiResponse";
import http from "./HttpServices";

export const sendOtp = async (
  data: ISendOtpRequestedData
): Promise<Success<ISendOtpResponse>> => {
  return (await http.post(API.user.sendOtp, data)).data;
};

export const checkOtp = async (
  data: ICheckOtpRequestedData
): Promise<Success<IUserData>> => {
  return (await http.post(API.user.checkOtp, data)).data;
};
export const completeProfile = async (
  data: ICompleteProfileRequiredData
): Promise<Success<IUserData>> => {
  return (await http.post(API.user.completeProfile, data)).data;
};
export const GetUserProfile = async (): Promise<Success<IUserProfile>> => {
  return (await http.get(`${API.user.userProfile}`)).data;
};
export const Logout = async () => {
  return (await http.post(`${API.user.logout}`)).data;
};
