import useGetOwnerProjects from "../../Projects/Hooks/useGetOwnerProjects";
import Loading from "../../Shared/UI/Loading";
import DashboardHeader from "./Header";
import Stats from "./Stats";

const Dashboard = () => {
  const { isLoading, data } = useGetOwnerProjects();
  if (isLoading) return <Loading />;
  return (
    <div>
      <DashboardHeader />
      <Stats projects={data?.data.projects ?? []} />
    </div>
  );
};

export default Dashboard;
