import { IStat } from "../../../Types/Shared/Stat";
import StatCart from "./StatCart";

interface IProps {
  data: IStat[];
}
const Stats = ({ data }: IProps) => {
  return (
    <div className="grid grid-cols-1 gap-x-8 text-primary-gray-900 lg:grid-cols-3">
      {data.map(({ Icon, count, title, color }) => {
        return (
          <StatCart
            key={`${title}${Icon}${count}${color}`}
            Icon={Icon}
            count={count}
            title={title}
            color={color}
          />
        );
      })}
    </div>
  );
};

export default Stats;
