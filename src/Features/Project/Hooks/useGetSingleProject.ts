import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { useParams } from "react-router-dom";
import API from "../../../Constants/API";
import { getSingleProject } from "../../../Services/ProjectService";

const useGetSingleProject = () => {
  const { projectId } = useParams();

  const queryKey = useMemo(
    () => [`${API.projects.singleProject}/${projectId}`],
    []
  );

  const { data, isPending } = useQuery({
    queryKey,
    queryFn: () => getSingleProject(projectId),
  });

  return {
    project: data,
    isProjectLoading: isPending,
  };
};

export default useGetSingleProject;
