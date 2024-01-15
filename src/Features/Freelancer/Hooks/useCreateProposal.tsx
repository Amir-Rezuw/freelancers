import { useMutation } from "@tanstack/react-query";
import { useMemo } from "react";
import API from "../../../Constants/API";
import { addProposal } from "../../../Services/Proposals";

const useCreateProposal = () => {
  const mutationKey = useMemo(() => [`${API.proposal.add}`], []);
  return useMutation({
    mutationKey,
    mutationFn: addProposal,
  });
};

export default useCreateProposal;
