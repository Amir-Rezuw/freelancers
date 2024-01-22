import DashboardContent from "../../Features/Admin/DashboardContent";
import useGetProjectList from "../../Features/Freelancer/Hooks/useProjectList";
import useProposalsList from "../../Features/Proposal/Hooks/useProposalsList";
import Loading from "../../Features/Shared/UI/Loading";

const AdminDashboard = () => {
  const { isLoading: isProposalsLoading } = useProposalsList();
  const { isLoading: isProjectsLoading } = useGetProjectList();
  if (isProjectsLoading || isProposalsLoading) return <Loading width={200} />;
  return (
    <div>
      <DashboardContent />
    </div>
  );
};

export default AdminDashboard;
