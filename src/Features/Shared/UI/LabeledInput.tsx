import { ChangeEvent, HTMLInputTypeAttribute } from "react";
import {
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";
import ErrorLabel from "./ErrorLabel";

interface IProps<T extends FieldValues> {
  label: string;
  name: Path<T>;
  value?: string;
  error?: string;
  type: HTMLInputTypeAttribute;
  dir: "rtl" | "ltr";
  register: UseFormRegister<T>;
  required?: boolean;
  validation?: RegisterOptions;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const LabeledInput = <T extends FieldValues>({
  label,
  name,
  value,
  type,
  dir: inputDirection,
  register,
  validation,
  required = true,
  error,
  onChange,
  className,
}: IProps<T>) => {
  return (
    <div className={`flex flex-col gap-y-2 ${className}`}>
      <label
        className="block text-primary-gray-900"
        htmlFor={name}
      >
        {label} {required && <span className="text-error">*</span>}
      </label>
      {error && <ErrorLabel message={error} />}
      <input
        dir={inputDirection}
        defaultValue={value}
        id={name}
        className={`text-input w-full ${error && "border border-error"}`}
        type={type}
        {...register(name, validation)}
        onChange={onChange}
      />
    </div>
  );
};
export default LabeledInput;
