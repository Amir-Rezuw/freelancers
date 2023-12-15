import { ChangeEvent, Fragment, HTMLInputTypeAttribute } from "react";
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
  dir: "rtl" | "ltr";
  register: UseFormRegister<T>;
  required?: boolean;
  validation?: RegisterOptions;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const Textarea = <T extends FieldValues>({
  dir,
  label,
  name,
  register,
  error,
  required = true,
  validation,
  value,
}: IProps<T>) => {
  return (
    <Fragment>
      <label
        className="block"
        htmlFor={name}
      >
        {label} {required && <span className="text-error">*</span>}
      </label>

      <textarea
        dir={dir}
        defaultValue={value}
        id={name}
        className="text-input w-full"
        {...register(name, validation)}
      />
      {error && <div className="text-error text-xs">{error}</div>}
    </Fragment>
  );
};

export default Textarea;
