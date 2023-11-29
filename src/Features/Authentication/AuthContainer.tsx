import { useState } from "react";
import CheckOTPForm from "./CheckOTPForm";
import SendOTPForm from "./SendOTPForm";

const AuthContainer = () => {
  const [isInCodePage, setIsInCodePage] = useState(false);

  const [phoneNumber, setPhoneNumber] = useState("");
  const renderStep = () => {
    switch (isInCodePage) {
      case false:
        return (
          <SendOTPForm
            setPage={setIsInCodePage}
            phoneNumber={phoneNumber}
            setPhoneNumber={setPhoneNumber}
          />
        );

      default:
        return (
          <CheckOTPForm
            setPage={setIsInCodePage}
            phoneNumber={phoneNumber}
          />
        );
    }
  };
  return <div className="w-full sm:max-w-sm">{renderStep()}</div>;
};

export default AuthContainer;
