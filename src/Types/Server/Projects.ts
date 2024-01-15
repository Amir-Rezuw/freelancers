import { Statuses } from "../../Constants/Enums/Shared";
import { IProposal } from "./Proposal";
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

export interface IProjects {
  title: string;
  description: string;
  status: Statuses;
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
  category: ICategory;
  deadline: string;
  budget: number | string;
}
export interface ISingleProjectData {
  _id: string;
  title: string;
  description: string;
  status: Statuses;
  category: {
    _id: string;
    title: string;
    englishTitle: string;
  };
  budget: number;
  tags: string[];
  proposals: IProposal[];
  deadline: string;
  owner: {
    _id: string;
    name: string;
    avatarUrl: string | null;
  };
  freelancer: null;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
