import { NavLink } from "react-router-dom";
import { AdminPanelSidebar } from "../../Constants/NavLinks";
import AppLayout from "../Shared/UI/Layouts/AppLayout";
import Sidebar from "../Shared/UI/Sidebar";

const AdminLayout = () => {
  return (
    <AppLayout>
      <Sidebar>
        {AdminPanelSidebar.map(({ Icon, link, title }) => (
          <li key={title}>
            <NavLink
              to={link}
              className={({ isActive }) =>
                isActive
                  ? "bg-primary-blue-100/50 text-primary-blue-300 flex items-center gap-x-2 transition px-2 py-1.5 rounded-lg"
                  : "flex items-center gap-x-2 transition px-2 py-1.5 rounded-lg text-primary-gray-600 hover:bg-primary-blue-100/50 hover:text-primary-blue-600"
              }>
              <Icon />
              <span>{title}</span>
            </NavLink>
          </li>
        ))}
      </Sidebar>
    </AppLayout>
  );
};

export default AdminLayout;
