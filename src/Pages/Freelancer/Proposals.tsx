import ProposalTable from "../../Features/Proposal/ProposalTable";

const Proposals = () => {
  return (
    <div>
      <h1 className="font-black text-primary-gray-700 text-xl mb-8">
        درخواست های شما
      </h1>
      <ProposalTable />
    </div>
  );
};

export default Proposals;
