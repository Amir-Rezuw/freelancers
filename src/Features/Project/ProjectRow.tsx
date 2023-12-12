import { Fragment, useState } from "react";
import { HiOutlineTrash } from "react-icons/hi";
import { TbPencilMinus } from "react-icons/tb";
import { IOwnerProjects } from "../../Types/Server/Projects";
import { textService } from "../../Utils/TextAndNumber";
import { timeService } from "../../Utils/TimeService";
import Modal from "../Shared/UI/Modal";
interface IProps {
  index: number;
  project: IOwnerProjects;
}
const ProjectRow = ({ index, project }: IProps) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const toggleEditModal = (preferredValue?: boolean) => {
    setIsEditModalOpen((perviousValue) => preferredValue ?? !perviousValue);
  };
  const toggleDeleteModal = (preferredValue?: boolean) => {
    setIsDeleteModalOpen((perviousValue) => preferredValue ?? !perviousValue);
  };

  return (
    <Fragment>
      <td>{index + 1}</td>
      <td>{textService.truncateText(project.title, 30)}</td>
      <td>{project.category.title}</td>
      <td>{textService.addCommas(project.budget)}</td>
      <td>{timeService.convertIsoToPersian(project.deadline)}</td>
      <td>
        <div className="flex flex-wrap items-center gap-2 max-w-[200]">
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
        {project.status === "OPEN" ? (
          <span className="badge badge--success">باز</span>
        ) : (
          <span className="badge badge--danger">بسته</span>
        )}
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
            className="max-w-3xl w-full"
            modalToggler={toggleEditModal}
            modalHeaderTitle="Delete"
          >
            Delete
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
            isOpen={isEditModalOpen}
            className="max-w-3xl w-full"
            modalToggler={toggleDeleteModal}
            modalHeaderTitle="edit"
          >
            edit
          </Modal>
        </div>
      </td>
    </Fragment>
  );
};

export default ProjectRow;
