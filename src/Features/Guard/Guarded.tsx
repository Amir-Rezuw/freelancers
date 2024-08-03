import { FC, ReactNode } from "react";
import { Navigate } from "react-router-dom";
import Loading from "../Shared/UI/Loading";
import useAuthorize from "./useAuthorize";

interface IProps {
  children: ReactNode;
}

const Guarded: FC<IProps> = ({ children }) => {
  const { isAuthorized, isLoading, isAuthenticated } = useAuthorize();

  if (!isAuthenticated && !isLoading) return <Navigate to={"/auth"} />;
  if (!isLoading && !isAuthorized) return <Navigate to={"/access-denied"} />;
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen w-screen bg-primary-gray-0">
        <Loading width={400} />
      </div>
    );
  }

  return children;
};

export default Guarded;
