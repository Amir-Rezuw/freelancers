import { useForm } from "react-hook-form";
import { MessagesText } from "../../Constants/Enums/Messages";
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

  return (
    <form
      className="space-y-8 w-full"
      onSubmit={handleSubmit(otpSender)}
      id="send-otp-form">
      <div>
        <LabeledInput
          dir="ltr"
          label="شماره موبایل"
          error={errors.phoneNumber?.message}
          name="phoneNumber"
          type="number"
          value={phoneNumber}
          register={register}
          validation={{
            required: MessagesText.RequiredFieldError,
            pattern: {
              value: /^09\d{9}$/,
              message: MessagesText.PhoneNumberFormatError,
            },
          }}
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary w-full text-primary-gray-900"
        disabled={isPending}>
        {isPending ? <Loading /> : "ارسال کد تایید"}
      </button>
    </form>
  );
};
export default SendOTPForm;
