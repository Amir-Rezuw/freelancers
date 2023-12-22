import { Fragment } from "react";
import { HiOutlineTrash } from "react-icons/hi";
import { TbPencilMinus } from "react-icons/tb";
import { IOwnerProjects } from "../../Types/Server/Projects";
import ConfirmDelete from "../Shared/UI/ConfirmDelete";
import Modal from "../Shared/UI/Modal";
import AddProjectForm from "./AddProjectForm";

interface IProps {
  project: IOwnerProjects;
  isDeleteModalOpen: boolean;
  toggleDeleteModal: (preferredValue?: boolean) => void;
  toggleEditModal: (preferredValue?: boolean) => void;
  projectRemover: (projectId: string) => void;
  isPending: boolean;
  isEditModalOpen: boolean;
}

const EditAndDeleteProject = ({
  project,
  isDeleteModalOpen,
  projectRemover,
  toggleDeleteModal,
  toggleEditModal,
  isPending,
  isEditModalOpen,
}: IProps) => {
  return (
    <Fragment>
      <div>
        <button onClick={() => toggleDeleteModal()}>
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
              projectRemover(project._id);
              toggleDeleteModal(false);
            }}
            onCancel={() => toggleDeleteModal(false)}
            isConfirmButtonDisabled={isPending}
          />
        </Modal>
      </div>
      <div>
        <button
          onClick={() => {
            toggleEditModal();
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
            toggleModal={toggleEditModal}
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
    </Fragment>
  );
};

export default EditAndDeleteProject;
