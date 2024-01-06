import API from "../Constants/API";
import { Statuses } from "../Constants/Enums/Shared";
import { IProposal } from "../Types/Server/Projects";
import { Success } from "../Types/Shared/IApiResponse";
import http from "./HttpServices";

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
export const getProposalList = async (): Promise<
  Success<{ proposals: IProposal[] }>
> => {
  return (await http.get(`${API.proposal.getList}`)).data;
};
