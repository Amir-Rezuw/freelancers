import { Link } from "react-router-dom";
import useGetUserProfile from "../../Authentication/Hooks/useGetUserProfile";
import UserAvatar from "../../Authentication/UserAvatar";

import HeaderMenu from "./HeaderMenu";

const Header = ({ classNames }: { classNames?: string }) => {
  const { user, isLoading } = useGetUserProfile();

  return (
    <div
      className={`bg-primary-gray-0 py-4 px-8 border-b border-b-primary-gray-200 ${classNames}`}
    >
      <div
        className={`container xl:max-w-screen-lg flex items-center justify-end gap-x-8 transition duration-500 ${
          isLoading && "blur-sm opacity-50"
        }`}
      >
        <Link to={"dashboard"}>
          <UserAvatar avatarUrl={user?.avatarUrl} />
        </Link>
        <div className="relative">
          <HeaderMenu />
        </div>
      </div>
    </div>
  );
};

export default Header;
