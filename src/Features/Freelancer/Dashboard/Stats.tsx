import { FC } from "react";
import {
  HiOutlineCollection,
  HiOutlineCurrencyDollar,
  HiOutlineViewGrid,
} from "react-icons/hi";
import { Statuses } from "../../../Constants/Enums/Shared";
import { IProposal } from "../../../Types/Server/Projects";
import { textService } from "../../../Utils/TextAndNumber";
import StatCart from "../../Shared/UI/StatCart";

interface IProps {
  proposals: IProposal[];
}
const Stats: FC<IProps> = ({ proposals }) => {
  const proposalsCount = proposals.length;
  const acceptedProposalsCount = proposals.filter((project) => {
    return project.status === Statuses.VERIFIED;
  });
  const balance = acceptedProposalsCount.reduce(
    (acc, current) => acc + current.price,
    0
  );
  return (
    <div className="grid grid-cols-1 gap-x-8 text-primary-gray-900 lg:grid-cols-3">
      <StatCart
        Icon={<HiOutlineViewGrid className="w-10 h-10 sm:w-20 sm:h-20" />}
        count={proposalsCount}
        title="درخواست ها"
      />
      <StatCart
        Icon={<HiOutlineCurrencyDollar className="w-10 h-10 sm:w-20 sm:h-20" />}
        count={acceptedProposalsCount.length}
        title="درخواست های تایید شده"
        color="Success"
      />
      <StatCart
        Icon={<HiOutlineCollection className="w-10 h-10 sm:w-20 sm:h-20" />}
        count={+textService.addCommas(balance.toString())}
        title="کیف پول"
        color="Warning"
      />
    </div>
  );
};

export default Stats;
