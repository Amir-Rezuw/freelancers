import { useForm } from "react-hook-form";
import LabeledInput from "../Shared/UI/LabeledInput";
import Loading from "../Shared/UI/Loading";
import { useAuthCtx } from "./Context/Auth.ctx";
import useOtpSender from "./Hooks/useOtpSender";
interface IFormData {
  phoneNumber: string;
}
const SendOTPForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>();
  const { isPending, otpSender } = useOtpSender();
  const { phoneNumber } = useAuthCtx();
  console.log(errors);

  return (
    <form
      className="space-y-8 w-full"
      onSubmit={handleSubmit(otpSender)}
      id="send-otp-form"
    >
      <div>
        <LabeledInput
          inputDirection="ltr"
          label="شماره موبایل"
          error={errors.phoneNumber?.message}
          name="phoneNumber"
          type="number"
          value={phoneNumber}
          register={register}
          validation={{
            required: "این فیلد اجباری میباشد",
            pattern: {
              value: /^09\d{9}$/,
              message:
                "شماره وارد شده باید با ۰۹ شروع بشود و بیشتر یا کمتر از یازده رقم نباشد.",
            },
          }}
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary w-full"
        disabled={isPending}
      >
        {isPending ? <Loading /> : "ارسال کد تایید"}
      </button>
    </form>
  );
};
export default SendOTPForm;
