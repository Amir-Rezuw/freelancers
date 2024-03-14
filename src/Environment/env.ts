interface IEnvironment {
  appName: string;
  OtpLength: number;
  OtpResendTimer: number;
  baseUrl: string;
  domain: string;
  toastDelay: number;
}

export const environment: Readonly<IEnvironment> = {
  appName: "Freelancing",
  baseUrl: "https://freelancers-app-backend-eight.vercel.app/api/",
  domain: "https://freelancers-app-backend-eight.vercel.app/",
  toastDelay: 5000,
  OtpLength: 6,
  OtpResendTimer: 90,
};
// export const environment: Readonly<IEnvironment> = {
//   appName: "Freelancing",
//   baseUrl: "http://localhost:5000/api/",
//   domain: "http://localhost:5000/",
//   toastDelay: 5000,
//   OtpLength: 6,
//   OtpResendTimer: 90,
// };
