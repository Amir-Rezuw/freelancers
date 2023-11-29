import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { sendOtp } from "../../../Services/AuthService";

const useSendOtp = () => {
  return useMutation({
    mutationFn: sendOtp,
    onSuccess: () => {
      toast.success(`کد تایید با موفقیت ارسال گردید`);
    },
  });
};

export default useSendOtp;
