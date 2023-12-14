import { useNavigate } from "react-router-dom";
import { toast } from "react-toast";
import useErrorType from "../../Shared/Hooks/useErrorType";
import { useAuthCtx } from "../Context/Auth.ctx";
import useSendOtp from "./useSendOtp";
interface IFormData {
  phoneNumber: string;
}
const useOtpSender = () => {
  const { isPending, mutateAsync } = useSendOtp();
  const navigate = useNavigate();
  const { setPhoneNumber } = useAuthCtx();

  return {
    otpSender: async ({ phoneNumber }: IFormData) => {
      setPhoneNumber(phoneNumber);
      try {
        const { data } = await mutateAsync({
          phoneNumber: phoneNumber,
        });
        navigate({
          pathname: "/auth/check-otp",
        });
        toast.success(data.message);
      } catch (e) {
        toast.error(useErrorType(e));
      }
    },
    isPending,
  };
};

export default useOtpSender;
