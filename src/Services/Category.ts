import API from "../Constants/API";
import { ICategory } from "../Types/Server/Projects";
import { Success } from "../Types/Shared/IApiResponse";
import http from "./HttpServices";

export const getCategoryList = async (): Promise<
  Success<{ categories: ICategory[] }>
> => {
  return (await http.get(API.category.getAll)).data;
};
