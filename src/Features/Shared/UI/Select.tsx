import { Fragment, ReactNode } from "react";
import {
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";
import ErrorLabel from "./ErrorLabel";

interface IProps<T extends FieldValues> {
  register: UseFormRegister<T>;
  label: string;
  name: Path<T>;
  children: ReactNode;
  validation: RegisterOptions;
  required?: boolean;
  defaultValue?: string;
  error?: string;
}

const Select = <T extends FieldValues>({
  label,
  name,
  required = true,
  children,
  register,
  validation,
  defaultValue,
  error,
}: IProps<T>) => {
  return (
    <Fragment>
      <div className="w-full">
        <label
          className="mb-2 block text-primary-gray-700"
          htmlFor={name}
        >
          {label} {required && <span className="text-error">*</span>}
        </label>
        {error && <ErrorLabel message={error} />}
        <select
          defaultValue={defaultValue}
          {...register(name, validation)}
          className={`text-input w-full ${error && "border-error"}`}
          id={name}
        >
          {children}
        </select>
      </div>
    </Fragment>
  );
};

export default Select;
const Option = ({
  value,
  children,
  className,
}: {
  value: string;
  className?: string;
  children: ReactNode;
}) => {
  return (
    <option
      className={className}
      value={value}
    >
      {children}
    </option>
  );
};
Select.Option = Option;
