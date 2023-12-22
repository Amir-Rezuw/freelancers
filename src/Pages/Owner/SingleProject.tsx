import useGetSingleProject from "../../Features/Project/Hooks/useGetSingleProject";

const SingleProject = () => {
  const { project } = useGetSingleProject();

  return <div>single project</div>;
};

export default SingleProject;
