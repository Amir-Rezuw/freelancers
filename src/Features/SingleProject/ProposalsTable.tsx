import { Fragment } from "react";
import { IProposal } from "../../Types/Server/Projects";
import Table from "../Shared/UI/Table";
import ProposalRow from "./ProposalRow";

interface IProps {
  proposalList?: IProposal[];
}

const ProposalsTable = ({ proposalList }: IProps) => {
  if (!proposalList?.length) return <p>لیستی وجود ندارد</p>;

  return (
    <Fragment>
      <Table className="rounded-2xl ">
        <Table.Header>
          <th>#</th>
          <th>فریلنسر</th>
          <th>توضیحات</th>
          <th>زمان تحویل</th>
          <th>هزینه</th>
          <th>وضعیت</th>
          <th>عملیات</th>
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
