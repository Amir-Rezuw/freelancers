import useGetUserProfile from "../../Authentication/Hooks/useGetUserProfile";

const Header = ({ classNames }: { classNames?: string }) => {
  const { data } = useGetUserProfile();

  return <div className={`bg-white py-4 px-8 ${classNames}`}>App Header</div>;
};

export default Header;
