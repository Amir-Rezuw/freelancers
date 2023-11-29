import { AxiosError } from "axios";
import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { toast } from "react-toastify";
import LabeledInput from "../Shared/UI/LabeledInput";
import Loading from "../Shared/UI/Loading";
import useSendOtp from "./Hooks/useSendOtp";
const SendOTPForm = ({
  setPage,
}: {
  setPage: Dispatch<SetStateAction<boolean>>;
}) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const { isPending, mutateAsync } = useSendOtp();
  const OtpSender = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const { data } = await mutateAsync({ phoneNumber });
      if (data.message) {
        setPage((perviousState) => !perviousState);
      }
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
          label="شماره موبایل"
          name="phoneNumber"
          onChange={(e) => setPhoneNumber((e.target as HTMLInputElement).value)}
          value={phoneNumber}
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
