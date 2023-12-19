import { Fragment, useState } from "react";
import { HiOutlineTrash } from "react-icons/hi";
import { TbPencilMinus } from "react-icons/tb";
import { IOwnerProjects } from "../../Types/Server/Projects";
import { textService } from "../../Utils/TextAndNumber";
import { timeService } from "../../Utils/TimeService";
import useToggleState from "../Shared/Hooks/useToggleState";
import ConfirmDelete from "../Shared/UI/ConfirmDelete";
import Modal from "../Shared/UI/Modal";
import AddProjectForm from "./AddProjectForm";
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
      <td className=" flex gap-x-3">
        <div>
          <button
            onClick={() => {
              setIsDeleteModalOpen((perviousValue) => !perviousValue);
            }}
          >
            <HiOutlineTrash className="w-5 h-5 text-error" />
          </button>
          <Modal
            isOpen={isDeleteModalOpen}
            className="max-w-lg w-full"
            modalToggler={toggleDeleteModal}
            modalHeaderTitle={`حذف  ${project.title}`}
          >
            <ConfirmDelete
              title={project.title}
              onConfirm={() => {
                deleteProject(project._id);
                setIsDeleteModalOpen(false);
              }}
              onCancel={() => setIsDeleteModalOpen(false)}
              isConfirmButtonDisabled={isPending}
            />
          </Modal>
        </div>
        <div>
          <button
            onClick={() => {
              setIsEditModalOpen((perviousValue) => !perviousValue);
            }}
          >
            <TbPencilMinus className="w-5 h-5 text-warning" />
          </button>
          <Modal
            className="min-w-[40rem]"
            isOpen={isEditModalOpen}
            modalToggler={toggleEditModal}
            modalHeaderTitle={`ویرایش ${project.title}`}
          >
            <AddProjectForm
              id={project._id}
              modalStateSetterFn={setIsEditModalOpen}
              defaultValues={{
                budget: project.budget,
                category: project.category,
                deadline: project.deadline,
                description: project.description,
                tags: project.tags,
                title: project.title,
              }}
            />
          </Modal>
        </div>
      </td>
    </Fragment>
  );
};

export default ProjectRow;
