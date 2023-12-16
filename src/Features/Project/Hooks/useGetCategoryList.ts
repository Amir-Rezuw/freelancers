import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import API from "../../../Constants/API";
import { getCategoryList } from "../../../Services/Category";

const useGetCategoryList = () => {
  const queryKey = useMemo(() => [`${API.category.getAll}`], []);
  return useQuery({
    queryKey,
    queryFn: getCategoryList,
  });
};

export default useGetCategoryList;
