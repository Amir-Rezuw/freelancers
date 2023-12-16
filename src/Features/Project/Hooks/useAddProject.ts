import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useMemo } from "react";
import { toast } from "react-toast";
import API from "../../../Constants/API";
import { environment } from "../../../Environment/env";
import { addOwnerProject } from "../../../Services/ProjectService";
import useErrorType from "../../Shared/Hooks/useErrorType";

const useAddProject = () => {
  const queryClient = useQueryClient();
  const mutationKey = useMemo(
    () => [`${environment.baseUrl}${API.projects.addOwnerProject}`],
    []
  );

  return useMutation({
    mutationKey,
    mutationFn: addOwnerProject,
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
};

export default useAddProject;
