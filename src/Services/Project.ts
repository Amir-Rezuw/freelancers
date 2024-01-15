import API from "../Constants/API";
import { Statuses } from "../Constants/Enums/Shared";
import {
  IAddProjectRequiredData,
  IProjects,
  ISingleProjectData,
} from "../Types/Server/Projects";
import { Success } from "../Types/Shared/IApiResponse";
import http from "./HttpServices";

export const getOwnerProjects = async (): Promise<
  Success<{ projects: IProjects[] }>
> => {
  return (await http.get(API.projects.getOwnerProjects)).data;
};
export const deleteOwnerProject = async (
  projectId: string
): Promise<Success<{ message: string }>> => {
  return (await http.delete(`/project/${projectId}`)).data;
};
export const addOwnerProject = async (
  data: IAddProjectRequiredData
): Promise<Success<{ message: string }>> => {
  return (await http.post(API.projects.addOwnerProject, data)).data;
};
export const editOwnerProject = async ({
  data,
  id,
}: {
  id: string;
  data: IAddProjectRequiredData;
}): Promise<Success<{ message: string }>> => {
  return (await http.patch(`${API.projects.editOwnerProject}/${id}`, data))
    .data;
};
export const toggleProjectStatus = async ({
  data,
  id,
}: {
  id: string;
  data: { status: Statuses };
}): Promise<Success<{ message: string }>> => {
  return (await http.patch(`${API.projects.singleProject}/${id}`, data)).data;
};
export const getSingleProject = async (
  id: string | undefined
): Promise<void | Success<{ project: ISingleProjectData }>> => {
  if (id) return (await http.get(`${API.projects.singleProject}/${id}`)).data;
};
export const getProjectsList = async (): Promise<
  Success<{ projects: IProjects[] }>
> => {
  return (await http.get(API.projects.getProjectsList)).data;
};
