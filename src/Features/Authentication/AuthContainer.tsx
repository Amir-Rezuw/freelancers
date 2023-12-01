import { AxiosError } from "axios";
import { FormEvent, useState } from "react";
import { toast } from "react-toast";
import CheckOTPForm from "./CheckOTPForm";
import useSendOtp from "./Hooks/useSendOtp";
import SendOTPForm from "./SendOTPForm";

const AuthContainer = () => {
  const [isInCodePage, setIsInCodePage] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const { isPending, mutateAsync } = useSendOtp();

  const OtpSender = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const { data } = await mutateAsync({ phoneNumber });
      toast.success(data.message);
      if ((e.target as HTMLElement).id)
        setIsInCodePage((perviousState) => !perviousState);
    } catch (e) {
      toast.error((e as AxiosError).message, {});
    }
  };
  const renderStep = () => {
    switch (isInCodePage) {
      case false:
        return (
          <SendOTPForm
            OtpSender={OtpSender}
            isPending={isPending}
            phoneNumber={phoneNumber}
            setPhoneNumber={setPhoneNumber}
          />
        );

      default:
        return (
          <CheckOTPForm
            resendCode={OtpSender}
            phoneNumber={phoneNumber}
            onBackBtnPress={() =>
              setIsInCodePage((perviousState) => !perviousState)
            }
          />
        );
    }
  };
  return <div className="w-full sm:max-w-sm">{renderStep()}</div>;
};

export default AuthContainer;
