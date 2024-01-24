import API from "../Constants/API";
import { Statuses } from "../Constants/Enums/Shared";
import http from "./HttpServices";

export const changeUserStatus = async ({
  id,
  status,
}: {
  status: Statuses;
  id: string;
}) => {
  return await http.patch(`${API.admin.changeUserStatus}/${id}`, { status });
};
