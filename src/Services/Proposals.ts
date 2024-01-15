import API from "../Constants/API";
import { Statuses } from "../Constants/Enums/Shared";
import { IAddingProposalData, IProposal } from "../Types/Server/Proposal";
import { Success } from "../Types/Shared/IApiResponse";
import http from "./HttpServices";

export const ChangeProposalStatus = async ({
  id,
  ...rest
}: {
  id: string;
  status: Statuses;
  projectId: string;
}) => {
  return (await http.patch(`${API.proposal.proposal}/${id}`, rest)).data;
};
export const getProposalList = async (): Promise<
  Success<{ proposals: IProposal[] }>
> => {
  return (await http.get(`${API.proposal.getList}`)).data;
};

export const addProposal = async (data: IAddingProposalData) => {
  return (await http.post(API.proposal.add, data)).data;
};
