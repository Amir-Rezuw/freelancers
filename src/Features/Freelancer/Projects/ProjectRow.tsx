import { useState } from "react";
import { MdAssignmentAdd } from "react-icons/md";
import { Statuses } from "../../../Constants/Enums/Shared";
import { IProjects } from "../../../Types/Server/Projects";
import { textService } from "../../../Utils/TextAndNumber";
import { timeService } from "../../../Utils/TimeService";
import useToggleState from "../../Shared/Hooks/useToggleState";
import Modal from "../../Shared/UI/Modal";
import CreateProposal from "./CreateProposal";
interface IProps {
  project: IProjects;
  index: number;
  isAdmin: boolean;
}
const _CLASS_NAMES =
  "p-4 text-right whitespace-nowrap text-sm text-primary-gray-600";
const ProjectRow = ({ project, index, isAdmin }: IProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <td className={`${_CLASS_NAMES} ${index === 0 && "rounded-tr-2xl"}`}>
        {index + 1}
      </td>
      <td className={_CLASS_NAMES}>{project.title}</td>
      <td className={_CLASS_NAMES}>
        {textService.addCommas(project.budget.toString())}
      </td>
      <td className={_CLASS_NAMES}>
        {timeService.convertIsoToPersian(project.deadline)}
      </td>
      <td
        className={`${_CLASS_NAMES} ${
          isAdmin && index === 0 && "rounded-tl-2xl"
        }`}>
        <span
          className={`badge ${
            project.status === "OPEN" ? "badge--success" : "badge--danger"
          }`}>
          {textService.getStatusText(project.status)}
        </span>
      </td>
      <td
        hidden={isAdmin}
        className={`${_CLASS_NAMES} ${index === 0 && "rounded-tl-2xl"}`}>
        <Modal
          className="md:min-w-[45rem]"
          isOpen={isModalOpen}
          modalToggler={(value?: boolean) =>
            useToggleState(setIsModalOpen, value)
          }
          modalHeaderTitle={`درخواست انجام پروژه ${project.title}`}>
          <CreateProposal
            modalToggler={(value?: boolean) =>
              useToggleState(setIsModalOpen, value)
            }
            projectId={project._id}
          />
        </Modal>

        <button
          onClick={() => useToggleState(setIsModalOpen)}
          disabled={project.status === Statuses.CLOSE}>
          <MdAssignmentAdd
            className={`w-5 h-5 text-primary-blue-600 ${
              project.status === Statuses.CLOSE && "text-primary-blue-600/30"
            }`}
          />
        </button>
      </td>
    </>
  );
};

export default ProjectRow;
