import { ReactNode } from "react";

const colors = {
  Blue: "bg-primary-blue-100 text-primary-blue-700",
  Success: "bg-green-100 text-green-700",
  Warning: "bg-yellow-100 text-yellow-700",
};

interface IProps {
  Icon: ReactNode;
  count: string;
  title: string;
  color?: keyof typeof colors;
}

const StatCart = ({ Icon, count, title, color = "Blue" }: IProps) => {
  return (
    <div className="col-span-1 grid grid-rows-2 grid-cols-[2.4rem_1fr] sm:grid-cols-[6.4rem_1fr] bg-primary-gray-0 p-4 rounded-lg gap-x-4 my-4 lg:m-0">
      <div
        className={`row-span-2 flex items-center justify-center p-0.5 sm:p-2 aspect-square rounded-full place-self-center ${colors[color]}`}
      >
        {Icon}
      </div>
      <h5 className="font-bold text-primary-gray-500 text-lg self-center">
        {title}
      </h5>
      <p className="text-3xl font-bold text-primary-gray-900">{count}</p>
    </div>
  );
};

export default StatCart;
