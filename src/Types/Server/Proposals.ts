import API from "../../Constants/API";
import { Statuses } from "../../Constants/Enums/Shared";
import http from "../../Services/HttpServices";

export const ChangeProposalStatus = async ({
  id,
  data,
}: {
  id: string;
  data: Statuses;
}) => {
  return (await http.patch(`${API.proposal.proposal}/${id}`, { status: data }))
    .data;
};
