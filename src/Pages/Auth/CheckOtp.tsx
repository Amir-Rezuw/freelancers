import { Fragment } from "react";
import { Navigate } from "react-router-dom";
import CheckOTPForm from "../../Features/Authentication/CheckOTPForm";
import { useAuthCtx } from "../../Features/Authentication/Context/Auth.ctx";

const CheckOtp = () => {
  const { phoneNumber } = useAuthCtx();
  if (!phoneNumber) return <Navigate to={"/auth"} />;
  return (
    <Fragment>
      <CheckOTPForm />
    </Fragment>
  );
};

export default CheckOtp;
