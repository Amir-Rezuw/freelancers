import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toast";
import API from "../../../Constants/API";
import { environment } from "../../../Environment/env";
import { deleteOwnerProject } from "../../../Services/Project";
import useErrorType from "../../Shared/Hooks/useErrorType";

const useDeleteProject = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteOwnerProject,
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: [`${environment.baseUrl}${API.projects.getOwnerProjects}`],
      });
      toast.success(data.data.message);
    },
    onError: (err) => {
      toast.error(useErrorType(err));
    },
  });
};

export default useDeleteProject;
