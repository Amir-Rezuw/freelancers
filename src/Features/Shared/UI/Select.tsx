import { ReactNode } from "react";
import {
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";

interface IProps<T extends FieldValues> {
  register: UseFormRegister<T>;
  label: string;
  name: Path<T>;
  children: ReactNode;
  validation: RegisterOptions;
  required?: boolean;
}

const Select = <T extends FieldValues>({
  label,
  name,
  required = true,
  children,
  register,
  validation,
}: IProps<T>) => {
  return (
    <div className="w-full">
      <label
        className="mb-2 block text-primary-gray-700"
        htmlFor={name}
      >
        {label} {required && <span className="text-error">*</span>}
      </label>
      <select
        {...register(name, validation)}
        className="text-input w-full"
        id={name}
      >
        {children}
      </select>
    </div>
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
