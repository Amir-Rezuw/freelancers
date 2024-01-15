import { Fragment } from "react";
import { IProposal } from "../../Types/Server/Proposal";
import { textService } from "../../Utils/TextAndNumber";
interface IProps {
  index: number;
  proposal: IProposal;
}
const _CLASS_NAMES =
  "p-4 text-right whitespace-nowrap text-sm text-primary-gray-600";
const ProposalRow = ({ index, proposal }: IProps) => {
  return (
    <Fragment>
      <td className={`${_CLASS_NAMES} ${index === 0 && "rounded-tr-2xl"}`}>
        {index + 1}
      </td>
      <td className={_CLASS_NAMES}>
        {textService.truncateText(proposal.description, 30)}
      </td>
      <td className={_CLASS_NAMES}>
        {proposal.duration}
        &nbsp; روز
      </td>
      <td className={_CLASS_NAMES}>
        {textService.addCommas(proposal.price.toString())}
      </td>

      <td className={`${_CLASS_NAMES} ${index === 0 && "rounded-tl-2xl"}`}>
        <span
          className={`badge ${textService.getStatusBadge(proposal.status)}`}
        >
          {textService.getStatusText(proposal.status)}
        </span>
      </td>
    </Fragment>
  );
};

export default ProposalRow;
