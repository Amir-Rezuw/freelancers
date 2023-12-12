import API from "../Constants/API";
import { IOwnerProjects } from "../Types/Server/Projects";
import { Success } from "../Types/Shared/IApiResponse";
import http from "./HttpServices";

export const getOwnerProjects = async (): Promise<
  Success<{ projects: IOwnerProjects[] }>
> => {
  return (await http.get(API.projects.getOwnerProjects)).data;
};
export const deleteOwnerProject = async (
  projectId: string
): Promise<Success<{ message: string }>> => {
  return (await http.delete(`/project/${projectId}`)).data;
};
