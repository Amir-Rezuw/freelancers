import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import API from "../../../Constants/API";
import { getUsersList } from "../../../Services/AuthService";

const useGetUsersList = () => {
  const queryKey = useMemo(() => [API.admin.getUsersList], []);

  return useQuery({
    queryKey,
    queryFn: getUsersList,
  });
};

export default useGetUsersList;
