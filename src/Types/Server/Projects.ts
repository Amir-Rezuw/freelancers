import { Statuses } from "../../Constants/Enums/Shared";
import { IUser } from "./User";
export interface ICategory {
  _id: string;
  title: string;
  englishTitle: string;
  description: string;
  type: string;
  parentId: string | null;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
export interface IProposal {
  price: number;
  duration: number;
  description: string;
  user: IUser;
  status: Statuses;
}

export interface IOwnerProjects {
  title: string;
  description: string;
  status: "OPEN" | "CLOSE";
  category: ICategory;
  budget: number;
  tags: string[];
  proposals: IProposal[];
  deadline: string;
  owner: any;
  freelancer: any;
  _id: string;
}
export interface IAddProjectRequiredData {
  title: string;
  description: string;
  tags: string[];
  category: string;
  deadline: string;
  budget: number | string;
}
