import { HiArrowRight } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { ISingleProjectData } from "../../Types/Server/Projects";

interface IProps {
  project?: ISingleProjectData;
}

const SingleProjectHeader = ({ project }: IProps) => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center gap-x-4 mb-8">
      <button onClick={() => navigate(-1)}>
        <HiArrowRight className="h-5 w-5 text-primary-gray-500" />
      </button>
      <h2 className="font-black text-primary-gray-700 text-xl">
        لیست درخواست های {project?.title}
      </h2>
    </div>
  );
};

export default SingleProjectHeader;
