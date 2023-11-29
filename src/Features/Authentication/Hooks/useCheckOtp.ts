import { useMutation } from "@tanstack/react-query";
import { useMemo } from "react";

import API from "../../../Constants/API";
import { environment } from "../../../Environment/env";
import { checkOtp } from "../../../Services/AuthService";

const useCheckOtp = () => {
  const mutationKey = useMemo(
    () => [`${environment.baseUrl}${API.checkOtp}`],
    []
  );
  return useMutation({
    mutationKey,
    mutationFn: checkOtp,
  });
};

export default useCheckOtp;
