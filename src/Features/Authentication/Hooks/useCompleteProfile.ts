import { useMutation } from "@tanstack/react-query";
import { useMemo } from "react";
import API from "../../../Constants/API";
import { environment } from "../../../Environment/env";
import { completeProfile } from "../../../Services/AuthService";

const useCompleteProfile = () => {
  const mutationKey = useMemo(
    () => [`${environment.baseUrl}${API.user.completeProfile}`],
    []
  );
  return useMutation({
    mutationKey,
    mutationFn: completeProfile,
  });
};

export default useCompleteProfile;
