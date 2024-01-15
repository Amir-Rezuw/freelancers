import { Fragment, useState } from "react";
import { HiEye } from "react-icons/hi";
import { Link } from "react-router-dom";
import { IProjects } from "../../Types/Server/Projects";
import { textService } from "../../Utils/TextAndNumber";
import { timeService } from "../../Utils/TimeService";
import useToggleState from "../Shared/Hooks/useToggleState";
import EditAndDeleteProject from "./EditAndDeleteProject";
import useDeleteProject from "./Hooks/useDeleteProject";
import ToggleProjectStatus from "./ToggleProjectStatus";
interface IProps {
  index: number;
  project: IProjects;
}
const _CLASS_NAMES =
  "p-4 text-right whitespace-nowrap text-sm text-primary-gray-600";
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
      <td className={`${_CLASS_NAMES} ${index === 0 && "rounded-tr-2xl"}`}>
        {index + 1}
      </td>
      <td className={_CLASS_NAMES}>
        {textService.truncateText(project.title, 30)}
      </td>
      <td className={_CLASS_NAMES}>{project.category.title}</td>
      <td className={_CLASS_NAMES}>
        {textService.addCommas(project.budget.toString())}
      </td>
      <td className={_CLASS_NAMES}>
        {timeService.convertIsoToPersian(project.deadline)}
      </td>
      <td className={_CLASS_NAMES}>
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
      <td className={_CLASS_NAMES}>{project?.freelancer?.name || "-"}</td>
      <td className={_CLASS_NAMES}>
        <ToggleProjectStatus project={project} />
      </td>
      <td className={`${_CLASS_NAMES} flex gap-x-3`}>
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
      <td className={`${_CLASS_NAMES} ${index === 0 && "rounded-tl-2xl"}`}>
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
