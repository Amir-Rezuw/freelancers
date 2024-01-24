import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useMemo } from "react";
import API from "../../../Constants/API";
import { changeUserStatus } from "../../../Services/AdminService";

const useChangeUserStatus = () => {
  const queryClient = useQueryClient();
  const mutationKey = useMemo(() => [API.admin.changeUserStatus], []);
  return useMutation({
    mutationKey,
    mutationFn: changeUserStatus,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [`${API.admin.getUsersList}`],
      });
    },
  });
};

export default useChangeUserStatus;
