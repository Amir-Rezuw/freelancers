import { AxiosError } from "axios";
import { FormEvent, useRef, useState } from "react";
import { toast } from "react-toast";
import { UserTypes } from "../../Constants/Enums/Shared";
import { ICompleteProfileRequiredData } from "../../Types/Server/User";
import LabeledInput from "../Shared/UI/LabeledInput";
import Loading from "../Shared/UI/Loading";
import Radio from "../Shared/UI/Radio";
import useCompleteProfile from "./Hooks/useCompleteProfile";

const CompleteProfileForm = () => {
  const nameInput = useRef<HTMLInputElement>(null);
  const emailInput = useRef<HTMLInputElement>(null);
  const [role, setRole] = useState<UserTypes>(UserTypes.freelancer);
  const onSelectRole = (target: HTMLInputElement) => {
    const value = target.value as UserTypes;
    setRole(value);
  };
  const { mutateAsync, isPending } = useCompleteProfile();
  const onCompleteProfileSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const data: ICompleteProfileRequiredData = {
      email: emailInput.current?.value ?? "",
      name: nameInput.current?.value ?? "",
      role,
    };
    try {
      const response = await mutateAsync(data);
      toast.success(response.data.message);
    } catch (error) {
      toast.error((error as AxiosError).message);
    }
  };

  return (
    <form
      className="space-y-8"
      onSubmit={onCompleteProfileSubmit}
    >
      <div>
        <LabeledInput
          ref={nameInput}
          inputDirection="rtl"
          label="نام و نام خانوادگی"
          name="name"
          type="text"
        />
      </div>

      <div>
        <LabeledInput
          ref={emailInput}
          inputDirection="ltr"
          label="ایمیل"
          name="email"
          type="email"
        />
      </div>
      <div className="flex items-center gap-x-7">
        <div className="gap-x-2 flex items-center cursor-pointer text-primary-gray-600">
          <Radio
            label="کارفرما"
            name="role"
            onChange={({ target }) => {
              onSelectRole(target as HTMLInputElement);
            }}
            value={UserTypes.owner}
          />
        </div>
        <div className="gap-x-2 flex items-center cursor-pointer text-primary-gray-600">
          <Radio
            checked={role === UserTypes.freelancer}
            value={UserTypes.freelancer}
            label="فریلنسر"
            name="role"
            onChange={({ target }) => {
              onSelectRole(target as HTMLInputElement);
            }}
          />
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

export default CompleteProfileForm;
