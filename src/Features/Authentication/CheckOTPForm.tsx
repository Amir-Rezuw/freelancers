import { FormEvent, Fragment, useRef } from "react";
import { HiArrowRight } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toast";
import { Statuses, UserTypes } from "../../Constants/Enums/Shared";
import { environment } from "../../Environment/env";
import useErrorType from "../Shared/Hooks/useErrorType";
import useInterval from "../Shared/Hooks/useInterval";
import Loading from "../Shared/UI/Loading";
import OTPInputs from "../Shared/UI/OTPInputs";
import useCheckOtp from "./Hooks/useCheckOtp";
const CheckOTPForm = ({
  phoneNumber,
  onBackBtnPress,
  resendCode,
}: {
  phoneNumber: string;
  onBackBtnPress: () => void;
  resendCode: (e: FormEvent) => void;
}) => {
  const finalCode = useRef(0);
  const navigate = useNavigate();
  const { mutateAsync, isPending } = useCheckOtp();
  const { reset: resetTimer, timer: resendTimer } = useInterval({
    delay: 1000,
    duration: environment.OtpResendTimer,
    step: 1,
  });
  const onCheckCode = async (e: FormEvent) => {
    e.preventDefault();
    if (finalCode.current.toString().length !== environment.OtpLength) {
      toast.error("کد وارد شده اشتباه میباشد");
      return;
    }
    try {
      const { data } = await mutateAsync({
        phoneNumber,
        otp: `${finalCode.current}`,
      });

      if (!data.user.isActive) {
        toast.success(data.message);
        navigate(`/complete-profile`);
        return;
      }
      if (data.user.status === Statuses.PENDING) {
        toast.warn("پروفایل شما در انتظار تایید است لطفا صبور باشید.");
        return;
      }
      if (data.user.status === Statuses.REJECTED) {
        toast.error(
          "پروفایل شما توسط ادمین مسدود شده است لطفا با پشتیبانی تماس بگیرید."
        );
        return;
      }
      if (data.user.role === UserTypes.owner) {
        toast.success("خوش آمدید");
        navigate("/owner");
        return;
      }

      if (data.user.role === UserTypes.freelancer) {
        toast.success("خوش آمدید");
        navigate("/freelancer");
        return;
      }
    } catch (error) {
      toast.error(useErrorType(e));
    }
  };

  return (
    <Fragment>
      <button
        className="flex items-center w-4/12 justify-between text-warning self-start"
        onClick={onBackBtnPress}
      >
        <HiArrowRight />
        <p>ویرایش شماره</p>
      </button>
      <form
        className="space-y-3"
        onSubmit={onCheckCode}
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
            >
              {/* <span className="flex items-center justify-center">-</span> */}
            </OTPInputs>
          </div>
        </div>
        <div>
          {resendTimer > 0 ? (
            `${resendTimer} تا ارسال مجدد کد`
          ) : (
            <button
              type="button"
              onClick={(e) => {
                resendCode(e);
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
