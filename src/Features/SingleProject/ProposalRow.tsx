import { useState } from "react";
import { HiPencil } from "react-icons/hi";
import { IProposal } from "../../Types/Server/Proposal";
import { textService } from "../../Utils/TextAndNumber";
import useToggleState from "../Shared/Hooks/useToggleState";
import Modal from "../Shared/UI/Modal";
import ProposalStatusModalContent from "./ProposalStatusModalContent";

interface IProps {
  proposal: IProposal;
  index: number;
}
const _CLASS_NAMES =
  "p-4 text-right whitespace-nowrap text-sm text-primary-gray-600";
const ProposalRow = ({ proposal, index }: IProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <td className={`${_CLASS_NAMES} ${index === 0 && "rounded-tr-2xl"}`}>
        {index + 1}
      </td>
      <td className={_CLASS_NAMES}>{proposal.user?.name}</td>
      <td className={_CLASS_NAMES}>
        <p>{textService.truncateText(proposal.description, 50)}</p>
      </td>
      <td className={_CLASS_NAMES}>{proposal.duration}</td>
      <td className={_CLASS_NAMES}>
        {textService.addCommas(proposal.price.toString())}
      </td>
      <td className={_CLASS_NAMES}>
        <span
          className={`badge ${textService.getStatusBadge(proposal.status)}`}
        >
          {textService.getStatusText(proposal.status)}
        </span>
      </td>
      <td className={`${_CLASS_NAMES} ${index === 0 && "rounded-tl-2xl"}`}>
        <Modal
          isOpen={isModalOpen}
          modalToggler={(preferredValue?: boolean) => {
            useToggleState(setIsModalOpen, preferredValue);
          }}
          modalHeaderTitle="تغییر وضعیت درخواست"
        >
          <ProposalStatusModalContent
            closerFn={() => useToggleState(setIsModalOpen, false)}
            id={proposal._id}
            status={proposal.status}
          />
        </Modal>
        <button onClick={() => useToggleState(setIsModalOpen, true)}>
          <HiPencil className="w-5 h-5 text-warning" />
        </button>
      </td>
    </>
  );
};

export default ProposalRow;
