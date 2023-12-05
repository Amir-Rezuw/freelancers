import { FormEvent, forwardRef } from "react";

import LabeledInput from "../Shared/UI/LabeledInput";
import Loading from "../Shared/UI/Loading";
interface IProps {
  OtpSender: (e: FormEvent) => void;
  isPending: boolean;
}
const SendOTPForm = forwardRef<HTMLInputElement | null, IProps>(
  ({ OtpSender, isPending }, ref) => {
    return (
      <form
        className="space-y-8 w-full"
        onSubmit={OtpSender}
        id="send-otp-form"
      >
        <div>
          <LabeledInput
            inputDirection="ltr"
            label="شماره موبایل"
            name="phoneNumber"
            type="number"
            ref={ref}
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
  }
);

export default SendOTPForm;
