import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import API from "../../../Constants/API";
import { environment } from "../../../Environment/env";
import { getOwnerProjects } from "../../../Services/Project";

const useGetOwnerProjects = () => {
  const queryKey = useMemo(
    () => [`${environment.baseUrl}${API.projects.getOwnerProjects}`],
    []
  );
  return useQuery({
    queryKey,
    queryFn: getOwnerProjects,
    retry: false,
  });
};

export default useGetOwnerProjects;
