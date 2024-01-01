import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="w-full flex justify-center items-center h-screen bg-primary-gray-0">
      <div className="w-4/12 flex justify-center items-center flex-col shadow-primary p-10 rounded-3xl bg-primary-gray-100">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
