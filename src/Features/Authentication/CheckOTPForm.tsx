import { Dispatch, FormEvent, SetStateAction, useRef } from "react";

import { AxiosError } from "axios";

import { toast } from "react-toast";
import Loading from "../Shared/UI/Loading";
import OTPInputs from "../Shared/UI/OTPInputs";
import useCheckOtp from "./Hooks/useCheckOtp";
const CheckOTPForm = ({
  phoneNumber,
  setPage: _,
}: {
  setPage: Dispatch<SetStateAction<boolean>>;
  phoneNumber: string;
}) => {
  const finalCode = useRef(0);

  const { mutateAsync, isPending } = useCheckOtp();

  const onCheckCode = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const { data } = await mutateAsync({
        phoneNumber,
        otp: `${finalCode.current}`,
      });
      toast.success(data.message);
    } catch (error) {
      toast.error((error as AxiosError).message);
    }
  };
  return (
    <form
      className="space-y-8"
      onSubmit={onCheckCode}
    >
      <div>
        <p className="font-bold text-primary-gray-800">کد تایید را وارد کنید</p>
        <div className="flex flex-row-reverse">
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
      <button
        className="btn btn-primary w-full"
        type="submit"
        disabled={isPending}
      >
        {isPending ? <Loading /> : "تایید"}
      </button>
    </form>
  );
};

export default CheckOTPForm;
