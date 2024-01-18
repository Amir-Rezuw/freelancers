import { MdLogin } from "react-icons/md";
import { MessagesText } from "../Constants/Enums/Messages";
import useLogout from "../Features/Authentication/Hooks/useLogout";

const AccessDenied = () => {
  const { logout, isLoggingOut } = useLogout();
  return (
    <div className="flex justify-center items-center h-screen flex-col bg-primary-gray-0">
      <h1 className="text-xl font-bold text-primary-gray-700 mb-8">
        {MessagesText.AccessDenied}
      </h1>
      <button
        disabled={isLoggingOut}
        onClick={() => {
          logout();
        }}
        className="flex items-center gap-x-2">
        <MdLogin className="w-6 h-6 text-primary-blue-900" />
        <span className="text-primary-gray-700">بازگشت به صفحه ورود</span>
      </button>
    </div>
  );
};

export default AccessDenied;
