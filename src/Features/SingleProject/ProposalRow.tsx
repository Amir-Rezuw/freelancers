import { useState } from "react";
import { HiPencil } from "react-icons/hi";
import { IProposal } from "../../Types/Server/Projects";
import { textService } from "../../Utils/TextAndNumber";
import useToggleState from "../Shared/Hooks/useToggleState";
import Modal from "../Shared/UI/Modal";
import ProposalStatusModalContent from "./ProposalStatusModalContent";

interface IProps {
  proposal: IProposal;
  index: number;
}

const ProposalRow = ({ proposal, index }: IProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <td className={`${index === 0 && "rounded-tr-2xl"}`}>{index + 1}</td>
      <td>{proposal.user?.name}</td>
      <td>
        <p>{textService.truncateText(proposal.description, 50)}</p>
      </td>
      <td>{proposal.duration}</td>
      <td>{textService.addCommas(proposal.price.toString())}</td>
      <td>
        <span
          className={`badge ${textService.getStatusBadge(proposal.status)}`}
        >
          {textService.getStatusText(proposal.status)}
        </span>
      </td>
      <td className={`${index === 0 && "rounded-tl-2xl"}`}>
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
