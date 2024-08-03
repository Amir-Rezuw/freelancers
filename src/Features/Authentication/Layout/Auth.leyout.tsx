import { Navigate, Outlet } from "react-router-dom";
import { textService } from "../../../Utils/TextAndNumber";
import Loading from "../../Shared/UI/Loading";
import { useAuthCtx } from "../Context/Auth.ctx";
import useGetUserProfile from "../Hooks/useGetUserProfile";

const AuthLayout = () => {
  const { isUserLoggedIn } = useAuthCtx();
  const { isLoading, user } = useGetUserProfile(isUserLoggedIn);
  if (isLoading) return <Loading />;
  if (user)
    return <Navigate to={`/${textService.capitalizeFirstLetter(user.role)}`} />;
  return (
    <div className="w-full flex justify-center items-center h-screen bg-primary-gray-0">
      <div className="w-4/12 flex justify-center items-center flex-col shadow-primary p-10 rounded-3xl bg-primary-gray-100">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
