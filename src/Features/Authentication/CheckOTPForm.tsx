import { Fragment, useRef } from "react";
import { useForm } from "react-hook-form";
import { HiArrowRight } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toast";
import { Statuses, UserTypes } from "../../Constants/Enums/Shared";
import { MessagesText } from "../../Constants/Messages";
import { environment } from "../../Environment/env";
import useErrorType from "../Shared/Hooks/useErrorType";
import useInterval from "../Shared/Hooks/useInterval";
import Loading from "../Shared/UI/Loading";
import OTPInputs from "../Shared/UI/OTPInputs";
import { useAuthCtx } from "./Context/Auth.ctx";
import useCheckOtp from "./Hooks/useCheckOtp";
import useOtpSender from "./Hooks/useOtpSender";
interface IFormData {}
const CheckOTPForm = () => {
  const { otpSender } = useOtpSender();
  const { phoneNumber } = useAuthCtx();
  const finalCode = useRef(0);
  const navigate = useNavigate();
  const { mutateAsync, isPending } = useCheckOtp();
  const { handleSubmit } = useForm<IFormData>();
  const { reset: resetTimer, timer: resendTimer } = useInterval({
    delay: 1000,
    duration: environment.OtpResendTimer,
    step: 1,
  });
  const onCheckCode = async () => {
    if (finalCode.current.toString().length !== environment.OtpLength) {
      toast.error("کد وارد شده اشتباه میباشد");
      return;
    }
    try {
      const { data } = await mutateAsync({
        phoneNumber: phoneNumber ?? "",
        otp: `${finalCode.current}`,
      });

      if (!data.user.isActive) {
        toast.success(data.message ?? MessagesText.Welcome);
        navigate(`/complete-profile`);
        return;
      }
      if (data.user.status === Statuses.PENDING) {
        toast.warn(MessagesText.PendingProfileError);
        return;
      }
      if (data.user.status === Statuses.REJECTED) {
        toast.error(MessagesText.BannedProfileError);
        return;
      }
      if (data.user.role === UserTypes.owner) {
        toast.success(MessagesText.Welcome);
        navigate("/owner");
        return;
      }

      if (data.user.role === UserTypes.freelancer) {
        toast.success(MessagesText.Welcome);
        navigate("/freelancer");
        return;
      }
      // useCheckResult(data);
    } catch (error) {
      toast.error(useErrorType(error));
    }
  };

  return (
    <Fragment>
      <button
        className="flex items-center w-4/12 justify-between text-warning self-start"
        onClick={() => navigate("/auth")}
      >
        <HiArrowRight />
        <p>ویرایش شماره</p>
      </button>
      <form
        className="space-y-3"
        onSubmit={handleSubmit(onCheckCode)}
      >
        <div className="mt-4">
          <p className="font-bold text-primary-gray-800">
            کد تایید ارسال شده به شماره موبایل
            <span> {phoneNumber} </span>
            را وارد کنید
          </p>
          <div className="flex flex-row-reverse mt-2">
            <OTPInputs
              disabled={isPending}
              fieldLength={6}
              finalCodeRef={finalCode}
              inputClassNames="text-input w-14 mx-1 text-center"
            />
          </div>
        </div>
        <div>
          {resendTimer > 0 ? (
            `${resendTimer} تا ارسال مجدد کد`
          ) : (
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                otpSender({ phoneNumber: phoneNumber ?? "" });
                resetTimer();
              }}
              className="text-primary-blue-700"
            >
              ارسال مجدد
            </button>
          )}
        </div>
        <button
          className="btn btn-primary w-full"
          type="submit"
          disabled={isPending}
        >
          {isPending ? <Loading /> : "تایید"}
        </button>
      </form>
    </Fragment>
  );
};

export default CheckOTPForm;
