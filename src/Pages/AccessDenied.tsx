import { MdLogin } from "react-icons/md";
import { MessagesText } from "../Constants/Enums/Messages";
import useLogout from "../Features/Authentication/Hooks/useLogout";
import { useNavigate } from "react-router-dom";
import useGetUserProfile from "../Features/Authentication/Hooks/useGetUserProfile";
import { useAuthCtx } from "../Features/Authentication/Context/Auth.ctx";
import Loading from "../Features/Shared/UI/Loading";

const AccessDenied = () => {
  const { isLoggingOut, logout } = useLogout();
  const navigate = useNavigate();
  const { isUserLoggedIn } = useAuthCtx();
  const { user, isLoading, error } = useGetUserProfile(isUserLoggedIn);

  if (isLoading) return <Loading />;
  if (error)
    return (
      <div className="flex justify-center items-center h-screen flex-col bg-primary-gray-0">
        <h1 className="text-xl font-bold text-primary-gray-700 mb-8">
          خطا در گرفتن اطلاعات شما
        </h1>

        <button
          onClick={() => logout()}
          className="text-primary-gray-700 flex">
          <MdLogin className="w-6 h-6 text-primary-blue-900" />
          صفحه ورود.
        </button>
      </div>
    );
  return (
    <div className="flex justify-center items-center h-screen flex-col bg-primary-gray-0">
      <h1 className="text-xl font-bold text-primary-gray-700 mb-8">
        {MessagesText.AccessDenied}
      </h1>
      <button
        disabled={isLoggingOut}
        onClick={() => {
          navigate(`/${user!.role.toLowerCase()}/dashboard`);
        }}
        className="flex items-center gap-x-2">
        <MdLogin className="w-6 h-6 text-primary-blue-900" />
        <span className="text-primary-gray-700">بازگشت به صفحه ورود</span>
      </button>
    </div>
  );
};

export default AccessDenied;
