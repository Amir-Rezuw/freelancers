import { Statuses } from "../../Constants/Enums/Shared";
import { IUser } from "./User";

export interface IProposal {
  price: number;
  _id: string;
  duration: number;
  description: string;
  user: IUser | null;
  status: Statuses;
}
export interface IAddingProposalData {
  projectId: string;
  duration: number;
  price: number;
  description: string;
}
