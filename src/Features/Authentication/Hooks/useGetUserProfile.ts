import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import API from "../../../Constants/API";
import { environment } from "../../../Environment/env";
import { GetUserProfile } from "../../../Services/AuthService";

const useGetUserProfile = () => {
  const queryKey = useMemo(
    () => [`${environment.baseUrl}${API.userProfile}`],
    []
  );
  return useQuery({
    queryKey,
    queryFn: GetUserProfile,
    retry: false,
  });
};

export default useGetUserProfile;
