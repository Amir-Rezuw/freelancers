import { Fragment } from "react";
import { IProposal } from "../../Types/Server/Proposal";
import Table from "../Shared/UI/Table";
import ProposalRow from "./ProposalRow";

interface IProps {
  proposalList?: IProposal[];
}
const _TD_CLASS_NAMES =
  "text-right whitespace-nowrap px-4 py-2 text-primary-gray-600 text-base";
const ProposalsTable = ({ proposalList }: IProps) => {
  if (!proposalList?.length) return <p>لیستی وجود ندارد</p>;

  return (
    <Fragment>
      <Table className="rounded-2xl ">
        <Table.Header>
          <th className={_TD_CLASS_NAMES}>#</th>
          <th className={_TD_CLASS_NAMES}>فریلنسر</th>
          <th className={_TD_CLASS_NAMES}>توضیحات</th>
          <th className={_TD_CLASS_NAMES}>زمان تحویل</th>
          <th className={_TD_CLASS_NAMES}>هزینه</th>
          <th className={_TD_CLASS_NAMES}>وضعیت</th>
          <th className={_TD_CLASS_NAMES}>عملیات</th>
        </Table.Header>

        <Table.Body className="bg-primary-gray-0 ">
          {proposalList.map((proposal, index) => {
            return (
              <Table.Row key={proposal._id}>
                <ProposalRow
                  proposal={proposal}
                  index={index}
                />
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </Fragment>
  );
};

export default ProposalsTable;
