import Loading from "../../Features/Shared/UI/Loading";
import SingleProjectHeader from "../../Features/SingleProject/Header";
import useGetSingleProject from "../../Features/SingleProject/Hooks/useGetSingleProject";
import ProposalsTable from "../../Features/SingleProject/ProposalsTable";

const SingleProject = () => {
  const { data, isPending, isError } = useGetSingleProject();

  if (isPending || isError) {
    return (
      <Loading
        color="rgb(var(--primary-blue-700))"
        height={80}
        width={80}
      />
    );
  }
  return (
    <div>
      <SingleProjectHeader project={data?.data.project} />
      <ProposalsTable proposalList={data?.data.project.proposals} />
    </div>
  );
};

export default SingleProject;
