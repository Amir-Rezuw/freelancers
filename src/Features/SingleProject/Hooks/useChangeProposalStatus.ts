import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toast";
import API from "../../../Constants/API";
import { ChangeProposalStatus } from "../../../Types/Server/Proposals";
import useErrorType from "../../Shared/Hooks/useErrorType";

const useChangeProposalStatus = () => {
  const queryClient = useQueryClient();
  const { projectId } = useParams();
  const mutationKey = useMemo(() => [`${API.proposal.proposal}/status`], []);
  const { isPending, isSuccess, mutateAsync } = useMutation({
    mutationKey,
    mutationFn: ChangeProposalStatus,
    onSuccess: ({ data: { message } }) => {
      toast.success(message);
      queryClient.invalidateQueries({
        queryKey: [`${API.projects.singleProject}/${projectId}`],
      });
    },
    onError: (error) => {
      toast.error(useErrorType(error));
    },
  });

  return {
    isChanging: isPending,
    isChanged: isSuccess,
    changeStatus: mutateAsync,
  };
};

export default useChangeProposalStatus;
