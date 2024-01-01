import { ReactNode } from "react";

const Sidebar = ({
  classNames,
  children,
}: {
  children: ReactNode;
  classNames?: string;
}) => {
  return (
    <div
      className={`bg-primary-gray-0 border-l row-start-1 row-span-2 ${classNames}`}
    >
      <ul className="flex flex-col gap-y-4 p-4">{children}</ul>
    </div>
  );
};

export default Sidebar;
