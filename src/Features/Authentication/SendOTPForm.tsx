import { Dispatch, FormEvent, SetStateAction } from "react";

import LabeledInput from "../Shared/UI/LabeledInput";
import Loading from "../Shared/UI/Loading";
const SendOTPForm = ({
  phoneNumber,
  setPhoneNumber,
  OtpSender,
  isPending,
}: {
  phoneNumber: string;
  setPhoneNumber: Dispatch<SetStateAction<string>>;
  OtpSender: (e: FormEvent) => void;
  isPending: boolean;
}) => {
  return (
    <form
      className="space-y-8"
      onSubmit={OtpSender}
      id="send-otp-form"
    >
      <div className="">
        <LabeledInput
          inputDirection="ltr"
          label="شماره موبایل"
          name="phoneNumber"
          onChange={(e) => {
            if (Number.isNaN(+(e.target as HTMLInputElement).value)) return;

            setPhoneNumber((e.target as HTMLInputElement).value);
          }}
          value={phoneNumber}
          type="string"
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
