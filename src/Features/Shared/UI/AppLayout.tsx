import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="grid grid-rows-[auto_1fr] grid-cols-[15rem_1fr]  h-screen">
      <div className="bg-white py-4 px-8">App Header</div>
      <div className="bg-white row-start-1 row-span-2">App sidebar</div>
      <div className="bg-primary-gray-100 p-8 overflow-y-auto">
        <div className="mx-auto max-w-screen-md flex flex-col gap-y-12">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
