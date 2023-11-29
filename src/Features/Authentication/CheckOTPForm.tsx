import { Dispatch, SetStateAction, useRef } from "react";

import OTPInputs from "../Shared/UI/OTPInputs";
const CheckOTPForm = ({
  setPage,
}: {
  setPage: Dispatch<SetStateAction<boolean>>;
}) => {
  const finalCode = useRef(0);
  return (
    <form className="space-y-8">
      <div>
        <p className="font-bold text-primary-gray-800">کد تایید را وارد کنید</p>
        <div className="flex flex-row-reverse">
          <OTPInputs
            fieldLength={6}
            finalCodeRef={finalCode}
            inputClassNames="text-input w-14 mx-1 text-center"
          >
            {/* <span className="flex items-center justify-center">-</span> */}
          </OTPInputs>
        </div>
      </div>
      <button className="btn btn-primary w-full">تایید</button>
    </form>
  );
};

export default CheckOTPForm;
