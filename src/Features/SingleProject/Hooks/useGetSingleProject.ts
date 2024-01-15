import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { useParams } from "react-router-dom";
import API from "../../../Constants/API";
import { getSingleProject } from "../../../Services/Project";

const useGetSingleProject = () => {
  const { projectId } = useParams();

  const queryKey = useMemo(
    () => [`${API.projects.singleProject}/${projectId}`],
    []
  );

  return useQuery({
    queryKey,
    queryFn: () => getSingleProject(projectId),
  });
};

export default useGetSingleProject;
