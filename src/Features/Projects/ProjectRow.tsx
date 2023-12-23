import { Fragment, useState } from "react";
import { HiEye } from "react-icons/hi";
import { Link } from "react-router-dom";
import { IOwnerProjects } from "../../Types/Server/Projects";
import { textService } from "../../Utils/TextAndNumber";
import { timeService } from "../../Utils/TimeService";
import useToggleState from "../Shared/Hooks/useToggleState";
import EditAndDeleteProject from "./EditAndDeleteProject";
import useDeleteProject from "./Hooks/useDeleteProject";
import ToggleProjectStatus from "./ToggleProjectStatus";
interface IProps {
  index: number;
  project: IOwnerProjects;
}
const ProjectRow = ({ index, project }: IProps) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const toggleEditModal = (preferredValue?: boolean) => {
    useToggleState(setIsEditModalOpen, preferredValue);
  };
  const toggleDeleteModal = (preferredValue?: boolean) => {
    useToggleState(setIsDeleteModalOpen, preferredValue);
  };
  const { isPending, mutate: deleteProject } = useDeleteProject();
  return (
    <Fragment>
      <td>{index + 1}</td>
      <td>{textService.truncateText(project.title, 30)}</td>
      <td>{project.category.title}</td>
      <td>{textService.addCommas(project.budget.toString())}</td>
      <td>{timeService.convertIsoToPersian(project.deadline)}</td>
      <td>
        <div className="flex flex-wrap items-center gap-2 max-w-[200px]">
          {project.tags.map((tag) => (
            <span
              className="badge badge--secondary"
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div>
      </td>
      <td>{project?.freelancer?.name || "-"}</td>
      <td>
        <ToggleProjectStatus project={project} />
      </td>
      <td className="flex gap-x-3">
        <EditAndDeleteProject
          isDeleteModalOpen={isDeleteModalOpen}
          isEditModalOpen={isEditModalOpen}
          isPending={isPending}
          project={project}
          projectRemover={deleteProject}
          toggleDeleteModal={toggleDeleteModal}
          toggleEditModal={toggleEditModal}
        />
      </td>
      <td>
        <Link
          to={project._id}
          className="flex justify-center"
        >
          <HiEye className="w-5 h-5 text-primary-blue-800" />
        </Link>
      </td>
    </Fragment>
  );
};

export default ProjectRow;
