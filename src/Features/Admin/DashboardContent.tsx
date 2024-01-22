import {
  HiOutlineCollection,
  HiOutlineUser,
  HiOutlineViewGrid,
} from "react-icons/hi";
import { IStat } from "../../Types/Shared/Stat";
import useGetProjectList from "../Freelancer/Hooks/useProjectList";
import useProposalsList from "../Proposal/Hooks/useProposalsList";
import DashboardHeader from "../Shared/UI/DashboardHeader";
import Loading from "../Shared/UI/Loading";
import Stats from "../Shared/UI/Stats";
import useGetUsersList from "./Hooks/useGetUsersList";

interface IProps {}

const DashboardContent = ({}: IProps) => {
  const {
    isError: isProposalsError,
    data: proposals,
    isLoading: isLoadingProposals,
  } = useProposalsList();
  const {
    isError: isProjectError,
    data: projects,
    isLoading: isLoadingProjects,
  } = useGetProjectList();
  const {
    isError: isUsersError,
    data: users,
    isLoading: isLoadingUsers,
  } = useGetUsersList();
  if (isUsersError || isProposalsError || isProjectError)
    return <div>Error</div>;
  if (isLoadingProjects || isLoadingProposals || isLoadingUsers)
    return <Loading width={200} />;
  const usersCount = users!.data.users.length.toString();
  const proposalsCount = proposals!.data.proposals.length.toString();
  const projectsCount = projects!.data.projects.length.toString();
  const statData: IStat[] = [
    {
      count: usersCount,
      Icon: <HiOutlineUser className="w-10 h-10 sm:w-20 sm:h-20" />,
      title: "کاربران",
      color: "Warning",
    },
    {
      count: proposalsCount,
      Icon: <HiOutlineViewGrid className="w-10 h-10 sm:w-20 sm:h-20" />,
      title: "درخواست ها",
    },
    {
      count: projectsCount,
      Icon: <HiOutlineCollection className="w-10 h-10 sm:w-20 sm:h-20" />,
      title: "پروژه ها",
      color: "Success",
    },
  ];
  return (
    <div>
      <DashboardHeader />
      <Stats data={statData} />
    </div>
  );
};

export default DashboardContent;
