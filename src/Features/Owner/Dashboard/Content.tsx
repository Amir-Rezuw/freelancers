import {
  HiOutlineCollection,
  HiOutlineCurrencyDollar,
  HiOutlineViewGrid,
} from "react-icons/hi";
import { Statuses } from "../../../Constants/Enums/Shared";
import { IStat } from "../../../Types/Shared/Stat";
import useGetOwnerProjects from "../../Projects/Hooks/useGetOwnerProjects";
import DashboardHeader from "../../Shared/UI/DashboardHeader";
import Loading from "../../Shared/UI/Loading";
import Stats from "../../Shared/UI/Stats";

const Dashboard = () => {
  const { isLoading, data, isError } = useGetOwnerProjects();
  if (isError) return <div className="text-primary-gray-900">Error</div>;
  if (isLoading) return <Loading />;
  const projects = data!.data.projects;
  const projectsCount = projects.length;
  const AcceptedProjectsCount = projects.map(
    (project) => project.status === Statuses.VERIFIED
  ).length;
  const proposalsCount = projects.reduce(
    (total, current) => current.proposals.length + total,
    0
  );
  const statData: IStat[] = [
    {
      count: `${projectsCount}`,
      Icon: <HiOutlineViewGrid className="w-10 h-10 sm:w-20 sm:h-20" />,
      title: "پروژه ها",
    },
    {
      Icon: <HiOutlineCurrencyDollar className="w-10 h-10 sm:w-20 sm:h-20" />,
      count: `${AcceptedProjectsCount}`,
      title: "پروژه های واگذار شده",
      color: "Success",
    },
    {
      count: `${proposalsCount}`,
      Icon: <HiOutlineCollection className="w-10 h-10 sm:w-20 sm:h-20" />,
      title: "درخواست ها",
      color: "Warning",
    },
  ];
  return (
    <div>
      <DashboardHeader />
      <Stats data={statData} />
    </div>
  );
};

export default Dashboard;
