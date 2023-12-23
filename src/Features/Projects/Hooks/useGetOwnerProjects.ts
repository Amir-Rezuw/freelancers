import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import API from "../../../Constants/API";
import { environment } from "../../../Environment/env";
import { getOwnerProjects } from "../../../Services/ProjectService";

const useGetOwnerProjects = () => {
  const queryKey = useMemo(
    () => [`${environment.baseUrl}${API.projects.getOwnerProjects}`],
    []
  );
  return useQuery({
    queryKey,
    queryFn: getOwnerProjects,
  });
};

export default useGetOwnerProjects;
