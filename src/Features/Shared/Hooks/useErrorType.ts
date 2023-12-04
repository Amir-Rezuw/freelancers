import { AxiosError, AxiosResponse } from "axios";
import { IError } from "../../../Types/Shared/IApiResponse";

const useErrorType = (e: unknown): string => {
  return ((e as AxiosError).response as AxiosResponse<IError>).data.message;
};

export default useErrorType;
