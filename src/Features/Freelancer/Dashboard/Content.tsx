import { Fragment } from "react";
import useProposalsList from "../../Proposal/Hooks/useProposalsList";
import Loading from "../../Shared/UI/Loading";
import DashboardHeader from "./Header";
import Stats from "./Stats";

const FreelancerDashboardContent = () => {
  const { isLoading, data } = useProposalsList();
  if (isLoading) return <Loading />;
  return (
    <Fragment>
      <DashboardHeader />
      <Stats proposals={data?.data.proposals ?? []} />
    </Fragment>
  );
};

export default FreelancerDashboardContent;
