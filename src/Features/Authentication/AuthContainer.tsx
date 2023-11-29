import { useState } from "react";
import CheckOTPForm from "./CheckOTPForm";
import SendOTPForm from "./SendOTPForm";

const AuthContainer = () => {
  const [isInCodePage, setIsInCodePage] = useState(true);
  const renderStep = () => {
    switch (isInCodePage) {
      case false:
        return <SendOTPForm setPage={setIsInCodePage} />;

      default:
        return <CheckOTPForm setPage={setIsInCodePage} />;
    }
  };
  return <div className="w-full sm:max-w-sm">{renderStep()}</div>;
};

export default AuthContainer;
