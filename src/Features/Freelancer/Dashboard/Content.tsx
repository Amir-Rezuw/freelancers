import { Fragment } from "react";
import useProposalsList from "../../Proposal/Hooks/useProposalsList";
import Loading from "../../Shared/UI/Loading";

import {
  HiOutlineCollection,
  HiOutlineCurrencyDollar,
  HiOutlineViewGrid,
} from "react-icons/hi";
import { Statuses } from "../../../Constants/Enums/Shared";
import { IStat } from "../../../Types/Shared/Stat";
import { textService } from "../../../Utils/TextAndNumber";
import DashboardHeader from "../../Shared/UI/DashboardHeader";
import Stats from "../../Shared/UI/Stats";

const FreelancerDashboardContent = () => {
  const { isLoading, data, isError } = useProposalsList();
  if (isError) return <div>error</div>;
  if (isLoading) return <Loading />;
  const proposals = data!.data.proposals;
  const proposalsCount = proposals.length;
  const acceptedProposalsCount = proposals.filter((project) => {
    return project.status === Statuses.VERIFIED;
  });
  const balance = acceptedProposalsCount.reduce(
    (acc, current) => acc + current.price,
    0
  );
  const statData: IStat[] = [
    {
      count: `${proposalsCount}`,
      Icon: <HiOutlineViewGrid className="w-10 h-10 sm:w-20 sm:h-20" />,
      title: "درخواست ها",
    },
    {
      Icon: <HiOutlineCurrencyDollar className="w-10 h-10 sm:w-20 sm:h-20" />,
      count: acceptedProposalsCount.length.toString(),
      title: "درخواست های تایید شده",
      color: "Success",
    },
    {
      Icon: <HiOutlineCollection className="w-10 h-10 sm:w-20 sm:h-20" />,
      count: textService.addCommas(balance.toString()),
      title: "کیف پول",
      color: "Warning",
    },
  ];
  return (
    <Fragment>
      <DashboardHeader />
      <Stats data={statData} />
    </Fragment>
  );
};

export default FreelancerDashboardContent;
