import { useQuery } from "@tanstack/react-query";

import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import API from "../../../Constants/API";
import { getProjectsList } from "../../../Services/Project";

const useGetProjectList = () => {
  const { search } = useLocation();
  const queryKey = useMemo(
    () => [`${API.projects.getProjectsList}${search}`],
    [search]
  );

  return useQuery({
    queryKey,
    queryFn: () => getProjectsList(search),
    retry: false,
  });
};

export default useGetProjectList;
