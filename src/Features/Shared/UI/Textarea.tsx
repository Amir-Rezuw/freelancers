import { ChangeEvent, Fragment } from "react";
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
  error?: string;
  dir: "rtl" | "ltr";
  register: UseFormRegister<T>;
  required?: boolean;
  validation?: RegisterOptions;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  defaultValue?: string;
}

const Textarea = <T extends FieldValues>({
  dir,
  label,
  name,
  register,
  error,
  required = true,
  validation,
  defaultValue,
}: IProps<T>) => {
  return (
    <Fragment>
      <label
        className="block"
        htmlFor={name}
      >
        {label} {required && <span className="text-error">*</span>}
      </label>
      {error && <ErrorLabel message={error} />}
      <textarea
        dir={dir}
        defaultValue={defaultValue}
        id={name}
        className={`text-input w-full ${error && "border-error"}`}
        {...register(name, validation)}
      />
    </Fragment>
  );
};

export default Textarea;
