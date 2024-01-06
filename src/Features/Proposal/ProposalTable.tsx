import { Fragment } from "react";
import Loading from "../Shared/UI/Loading";
import Table from "../Shared/UI/Table";
import useProposalsList from "./Hooks/useProposalsList";
import ProposalRow from "./ProposalRow";
const TH_CLASS_NAMES =
  "text-right whitespace-nowrap px-4 py-2 text-primary-gray-600 text-base";
const ProposalTable = () => {
  const { data, isLoading } = useProposalsList();

  if (isLoading) return <Loading />;
  return (
    <Fragment>
      <Table>
        <Table.Header>
          <th className={TH_CLASS_NAMES}>#</th>
          <th className={TH_CLASS_NAMES}>توضیحات</th>
          <th className={TH_CLASS_NAMES}>زمان تحویل</th>
          <th className={TH_CLASS_NAMES}>هزینه</th>
          <th className={TH_CLASS_NAMES}>وضعیت</th>
        </Table.Header>

        <Table.Body className="bg-primary-gray-0">
          {data?.data.proposals.map((proposal, index) => {
            return (
              <Table.Row
                className={`border-b border-primary-gray-200 ${
                  index === data.data.proposals.length - 1 && "border-none"
                }`}
                key={proposal._id}
              >
                <ProposalRow
                  index={index}
                  proposal={proposal}
                />
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </Fragment>
  );
};

export default ProposalTable;
