import { NavLink } from "react-router-dom";
import { OwnerPanelSideBar } from "../../../Constants/Navlinks";

const Sidebar = ({ classNames }: { classNames?: string }) => {
  return (
    <div
      className={`bg-primary-gray-0 border-l row-start-1 row-span-2 ${classNames}`}
    >
      <ul className="flex flex-col gap-y-4 p-4">
        {OwnerPanelSideBar.map(({ Icon, link, title }) => {
          return (
            <li key={title}>
              <NavLink
                to={link}
                className={({ isActive }) =>
                  isActive
                    ? "bg-primary-blue-100/50 text-primary-blue-900 flex items-center gap-x-2 transition px-2 py-1.5 rounded-lg"
                    : "flex items-center gap-x-2 transition px-2 py-1.5 rounded-lg text-primary-gray-600 hover:bg-primary-blue-100/50 hover:text-primary-blue-900"
                }
              >
                <Icon />
                <span>{title}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
