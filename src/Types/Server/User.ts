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
export interface ICheckOtpResponse {
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
    status: number;
    role: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
    avatarUrl: null | string;
  };
}
