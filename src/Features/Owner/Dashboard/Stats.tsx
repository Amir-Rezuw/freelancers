import { FC } from "react";
import {
  HiOutlineCollection,
  HiOutlineCurrencyDollar,
  HiOutlineViewGrid,
} from "react-icons/hi";
import { Statuses } from "../../../Constants/Enums/Shared";
import { IProjects } from "../../../Types/Server/Projects";
import StatCart from "../../Shared/UI/StatCart";

interface IProps {
  projects: IProjects[];
}
const Stats: FC<IProps> = ({ projects }) => {
  const projectsCount = projects.length;
  const AcceptedProjectsCount = projects.map(
    (project) => project.status === Statuses.VERIFIED
  ).length;
  const proposalsCount = projects.reduce(
    (total, current) => current.proposals.length + total,
    0
  );
  return (
    <div className="grid grid-cols-1 gap-x-8 text-primary-gray-900 lg:grid-cols-3">
      <StatCart
        Icon={<HiOutlineViewGrid className="w-10 h-10 sm:w-20 sm:h-20" />}
        count={projectsCount}
        title="پروژه ها"
      />
      <StatCart
        Icon={<HiOutlineCurrencyDollar className="w-10 h-10 sm:w-20 sm:h-20" />}
        count={AcceptedProjectsCount}
        title="پروژه های واگذار شده"
        color="Success"
      />
      <StatCart
        Icon={<HiOutlineCollection className="w-10 h-10 sm:w-20 sm:h-20" />}
        count={proposalsCount}
        title="درخواست ها"
        color="Warning"
      />
    </div>
  );
};

export default Stats;
