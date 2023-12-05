import { FormEvent, useRef, useState } from "react";
import { toast } from "react-toast";
import useErrorType from "../Shared/Hooks/useErrorType";
import CheckOTPForm from "./CheckOTPForm";
import useSendOtp from "./Hooks/useSendOtp";
import SendOTPForm from "./SendOTPForm";

const AuthContainer = () => {
  const [isInCodePage, setIsInCodePage] = useState(false);
  const { isPending, mutateAsync } = useSendOtp();
  const phoneNumberRef = useRef<HTMLInputElement>(null);
  const OtpSender = async (e: FormEvent) => {
    e.preventDefault();

    if (!phoneNumberRef.current) {
      throw new Error(
        "There is a problem in file: src/Features/Authentication/AuthContainer.tsx"
      );
    }
    if (phoneNumberRef.current.value.length < 11) {
      toast.error("شماره موبایل وارد شده صحیح نمیباشد.");
      return;
    }
    try {
      const { data } = await mutateAsync({
        phoneNumber: phoneNumberRef.current.value ?? "",
      });
      toast.success(data.message);
      if ((e.target as HTMLElement).id)
        setIsInCodePage((perviousState) => !perviousState);
    } catch (e) {
      toast.error(useErrorType(e));
    }
  };
  const renderStep = () => {
    switch (isInCodePage) {
      case false:
        return (
          <SendOTPForm
            ref={phoneNumberRef}
            OtpSender={OtpSender}
            isPending={isPending}
          />
        );

      default:
        return (
          <CheckOTPForm
            resendCode={OtpSender}
            phoneNumber={phoneNumberRef.current?.value ?? ""}
            onBackBtnPress={() =>
              setIsInCodePage((perviousState) => !perviousState)
            }
          />
        );
    }
  };
  return (
    <div className="w-full flex justify-center items-center h-screen">
      <div className="w-4/12 flex justify-center items-center flex-col shadow-primary p-10 rounded-3xl">
        {renderStep()}
      </div>
    </div>
  );
};

export default AuthContainer;
