import { Roles, Statuses } from "../../Constants/Enums/Shared";

export interface ISendOtpRequestedData {
  phoneNumber: string;
}
export interface ISendOtpResponse {
  message: string;
  expiresIn: number;
  phoneNumber: string;
}
export interface ICheckOtpRequestedData {
  phoneNumber: string;
  otp: string;
}
export interface IUser {
  avatarUrl: string | null;
  biography: string | null;
  createdAt: string;
  email: string;
  isActive: boolean;
  isVerifiedPhoneNumber: boolean;
  name: string;
  phoneNumber: string;
  resetLink: string | null;
  role: Roles;
  status: Statuses;
  updatedAt: string;
  __v: number;
  _id: string;
}
export interface IUserProfile {
  user: IUser;
}
export interface IUserData {
  message: string;
  user: {
    otp: {
      code: number;
      expiresIn: string;
    };
    _id: string;
    biography: string | null;
    phoneNumber: string;
    resetLink: string | null;
    isVerifiedPhoneNumber: boolean;
    isActive: boolean;
    status: Statuses;
    role: Roles;
    createdAt: string;
    updatedAt: string;
    __v: number;
    avatarUrl: null | string;
    email?: string;
    name?: string;
  };
}
export interface ICompleteProfileRequiredData {
  name: string;
  email: string;
  role: Roles;
}
