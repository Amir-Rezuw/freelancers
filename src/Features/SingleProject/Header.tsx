import { ISingleProjectData } from "../../Types/Server/Projects";

interface IProps {
  project?: ISingleProjectData;
}

const SingleProjectHeader = ({ project }: IProps) => {
  return <div>{project?.title}</div>;
};

export default SingleProjectHeader;
