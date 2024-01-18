import { useLocation } from "react-router-dom";

import { Roles } from "../../../Constants/Enums/Shared";
import useGetUserProfile from "./useGetUserProfile";

const useAuthorize = () => {
  const { isLoading, user } = useGetUserProfile();
  const { pathname } = useLocation();
  let isAuthenticated = false;

  if (user) isAuthenticated = true;

  let isAuthorized = false;

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
  return { isLoading, isAuthenticated, isAuthorized, user };
};

export default useAuthorize;
