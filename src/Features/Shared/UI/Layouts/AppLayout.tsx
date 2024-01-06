import { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";

const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="grid grid-rows-[auto_1fr] grid-cols-[15rem_1fr] h-screen">
      <Header />
      {children}
      <div className="bg-primary-gray-100 p-8 overflow-y-auto">
        <div className="mx-auto max-w-screen-xl flex flex-col gap-y-12">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
