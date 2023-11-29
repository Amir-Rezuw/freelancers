import { AxiosError } from "axios";
import { Dispatch, FormEvent, SetStateAction } from "react";

import { toast } from "react-toast";
import LabeledInput from "../Shared/UI/LabeledInput";
import Loading from "../Shared/UI/Loading";
import useSendOtp from "./Hooks/useSendOtp";
const SendOTPForm = ({
  setPage,
  phoneNumber,
  setPhoneNumber,
}: {
  setPage: Dispatch<SetStateAction<boolean>>;
  phoneNumber: string;
  setPhoneNumber: Dispatch<SetStateAction<string>>;
}) => {
  const { isPending, mutateAsync } = useSendOtp();
  const OtpSender = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const { data } = await mutateAsync({ phoneNumber });
      toast.success(data.message);
      setPage((perviousState) => !perviousState);
    } catch (e) {
      toast.error((e as AxiosError).message);
    }
  };
  return (
    <form
      className="space-y-8"
      onSubmit={OtpSender}
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
