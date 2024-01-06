import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import API from "../../../Constants/API";
import { getProposalList } from "../../../Services/Proposals";

const useProposalsList = () => {
  const queryKey = useMemo(() => [API.proposal.getList], []);
  return useQuery({
    queryKey,
    queryFn: getProposalList,
  });
};

export default useProposalsList;
