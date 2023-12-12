import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const AppLayout = () => {
  return (
    <div className="grid grid-rows-[auto_1fr] grid-cols-[15rem_1fr]  h-screen">
      <Header classNames="bg-red-400" />
      <Sidebar classNames="bg-red-300" />
      <div className="bg-primary-gray-100 p-8 overflow-y-auto">
        <div className="mx-auto max-w-screen-xl flex flex-col gap-y-12">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
