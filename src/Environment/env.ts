interface IEnvironment {
  appName: string;

  baseUrl: string;
  domain: string;

  toastDelay: number;
}

export const environment: Readonly<IEnvironment> = {
  appName: "Freelancing",
  baseUrl: "http://localhost:5000/api/",
  domain: "http://localhost:5000/",
  toastDelay: 5000,
};
