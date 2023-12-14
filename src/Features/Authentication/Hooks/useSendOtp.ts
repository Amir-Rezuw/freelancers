import { useMutation } from "@tanstack/react-query";
import { useMemo } from "react";

import API from "../../../Constants/API";
import { environment } from "../../../Environment/env";
import { sendOtp } from "../../../Services/AuthService";

const useSendOtp = () => {
  const mutationKey = useMemo(
    () => [`${environment.baseUrl}${API.user.sendOtp}`],
    []
  );
  return useMutation({
    mutationKey,
    mutationFn: sendOtp,
  });
};

export default useSendOtp;
