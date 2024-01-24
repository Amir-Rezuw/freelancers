import { useLocation } from "react-router-dom";

import { Roles, Statuses } from "../../Constants/Enums/Shared";
import useGetUserProfile from "../Authentication/Hooks/useGetUserProfile";

const useAuthorize = () => {
  const { isLoading, user } = useGetUserProfile();
  const { pathname } = useLocation();
  let isAuthenticated = false;

  if (user) isAuthenticated = true;

  let isAuthorized = false;
  let isVerified = false;

  if (user?.status === Statuses.VERIFIED) isVerified = true;

  if (pathname.toLowerCase().includes(Roles.Owner.toLowerCase())) {
    if (user && user.role.toLowerCase() === Roles.Owner.toLowerCase())
      isAuthorized = true;
  }
  if (pathname.toLowerCase().includes(Roles.Admin.toLowerCase())) {
    if (user && user.role.toLowerCase() === Roles.Admin.toLowerCase())
      isAuthorized = true;
  }
  if (pathname.toLowerCase().includes(Roles.Freelancer.toLowerCase())) {
    if (user && user.role.toLowerCase() === Roles.Freelancer.toLowerCase())
      isAuthorized = true;
  }
  return { isLoading, isAuthenticated, isAuthorized, user, isVerified };
};

export default useAuthorize;
