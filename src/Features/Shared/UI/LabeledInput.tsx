import { HTMLInputTypeAttribute } from "react";
import {
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";

interface IProps<T extends FieldValues> {
  label: string;
  name: Path<T>;
  value?: string;
  error?: string;
  type: HTMLInputTypeAttribute;
  inputDirection: "rtl" | "ltr";
  register: UseFormRegister<T>;
  required?: boolean;
  validation?: RegisterOptions;
}

const LabeledInput = <T extends FieldValues>({
  label,
  name,
  value,
  type,
  inputDirection,
  register,
  validation,
  required = true,
  error,
}: IProps<T>) => {
  return (
    <div className="flex flex-col gap-y-2">
      <label
        className="block"
        htmlFor={name}
      >
        {label} {required && <span className="text-error">*</span>}
      </label>
      <input
        dir={inputDirection}
        defaultValue={value}
        id={name}
        className="text-input w-full"
        type={type}
        {...register(name, validation)}
      />
      {error && <div className="text-error text-xs ">{error}</div>}
    </div>
  );
};
export default LabeledInput;
