import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useMemo } from "react";
import { toast } from "react-toast";
import API from "../../../Constants/API";
import { environment } from "../../../Environment/env";
import { editOwnerProject } from "../../../Services/ProjectService";
import useErrorType from "../../Shared/Hooks/useErrorType";

const useEditProject = () => {
  const queryClient = useQueryClient();
  const mutationKey = useMemo(() => [`${API.projects.editOwnerProject}`], []);
  const { isPending, isSuccess, mutateAsync } = useMutation({
    mutationKey,
    mutationFn: editOwnerProject,
    onSuccess: ({ data: { message } }) => {
      toast.success(message);
      queryClient.invalidateQueries({
        queryKey: [`${environment.baseUrl}${API.projects.getOwnerProjects}`],
      });
    },
    onError: (error) => {
      toast.error(useErrorType(error));
    },
  });

  return {
    isEditing: isPending,
    isEdited: isSuccess,
    editProject: mutateAsync,
  };
};

export default useEditProject;
