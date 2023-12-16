import { Fragment } from "react";
import {
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";
import { ICategory } from "../../../Types/Server/Projects";

interface IProps<T extends FieldValues> {
  register: UseFormRegister<T>;
  label: string;
  name: Path<T>;
  options: ICategory[];
  validation: RegisterOptions;
  required?: boolean;
}

const Select = <T extends FieldValues>({
  label,
  name,
  options,
  required = true,
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
        {options.map((item) => (
          <Fragment key={item._id}>
            <option value={item.englishTitle}>{item.title}</option>
          </Fragment>
        ))}
      </select>
    </div>
  );
};

export default Select;
