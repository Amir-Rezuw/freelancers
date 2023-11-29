export interface ISendOtpRequestedData {
  phoneNumber: string;
}
export interface ISendOtpResponse {
  message: string;
  expiresIn: number;
  phoneNumber: string;
}
