import { Fragment, useState } from "react";
import { HiPlus } from "react-icons/hi";
import useToggleState from "../Shared/Hooks/useToggleState";
import Modal from "../Shared/UI/Modal";
import AddProjectForm from "./AddProjectForm";

const ProjectsHeader = () => {
  const [isAddProjectModalOpen, setIsAddProjectModalOpen] = useState(false);
  const toggleAddProjectModal = (preferredValue?: boolean) => {
    useToggleState(setIsAddProjectModalOpen, preferredValue);
  };
  return (
    <Fragment>
      <div className="flex justify-between items-center">
        <h1>پروژه های شما</h1>
        <button
          className="btn btn-primary flex items-center gap-x-1"
          onClick={() => toggleAddProjectModal()}
        >
          <span>
            <HiPlus />
          </span>
          <span>اضافه کردن پروژه</span>
        </button>
      </div>
      <Modal
        className="min-w-[40rem]"
        isOpen={isAddProjectModalOpen}
        modalToggler={toggleAddProjectModal}
        modalHeaderTitle="افزودن پروژه‌ی جدید"
      >
        <AddProjectForm modalStateSetterFn={setIsAddProjectModalOpen} />
      </Modal>
    </Fragment>
  );
};
export default ProjectsHeader;
