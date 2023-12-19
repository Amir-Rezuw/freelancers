import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useMemo } from "react";
import { toast } from "react-toast";
import API from "../../../Constants/API";
import { environment } from "../../../Environment/env";
import { toggleProjectStatus } from "../../../Services/ProjectService";
import useErrorType from "../../Shared/Hooks/useErrorType";

const useToggleProjectStatus = () => {
  const queryClient = useQueryClient();
  const mutationKey = useMemo(() => [`${API.projects.toggleOwnerProject}`], []);
  const { mutateAsync, isPending } = useMutation({
    mutationFn: toggleProjectStatus,
    mutationKey,
    onSuccess: (data) => {
      toast.success(data.data.message);
      queryClient.invalidateQueries({
        queryKey: [`${environment.baseUrl}${API.projects.getOwnerProjects}`],
      });
    },
    onError: (error) => {
      toast.error(useErrorType(error));
    },
  });
  return {
    toggleStatus: mutateAsync,
    isToggling: isPending,
  };
};

export default useToggleProjectStatus;
