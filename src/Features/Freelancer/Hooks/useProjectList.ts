import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import API from "../../../Constants/API";
import { getProjectsList } from "../../../Services/Project";

const useGetProjectList = () => {
  const queryKey = useMemo(() => [`${API.projects.getProjectsList}`], []);
  return useQuery({
    queryKey,
    queryFn: getProjectsList,
    retry: false,
  });
};

export default useGetProjectList;
