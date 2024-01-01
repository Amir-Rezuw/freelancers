import { HiArrowRightOnRectangle } from "react-icons/hi2";
import useLogout from "./Hooks/useLogout";

interface IProps {}

const Logout = ({}: IProps) => {
  const { logout, isLoggingOut } = useLogout();
  return (
    <>
      <button
        onClick={() => logout()}
        disabled={isLoggingOut}
      >
        <HiArrowRightOnRectangle className="w-5 h-5 transition text-primary-gray-500 hover:text-error" />
      </button>
    </>
  );
};

export default Logout;
