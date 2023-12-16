import {
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
  WatchInternal,
} from "react-hook-form";
import { UserTypes } from "../../../Constants/Enums/Shared";
import ErrorLabel from "./ErrorLabel";

interface IProps<T extends FieldValues> {
  label: string;
  classNames?: string;
  name: Path<T>;
  value: UserTypes;
  register: UseFormRegister<T>;
  validation?: RegisterOptions;
  errorMessage?: string;
  watch: WatchInternal<T>;
}

const Radio = <T extends FieldValues>({
  classNames,
  label,
  value,
  name,
  register,
  validation,
  errorMessage,
  watch,
}: IProps<T>) => {
  return (
    <div className="gap-x-2 flex items-center cursor-pointer text-primary-gray-600">
      <input
        className={`form-radio text-primary-blue-600 focus:ring-primary-blue-600 ${classNames}`}
        type="radio"
        value={value}
        checked={watch(name) === value}
        id={value}
        {...register(name, validation)}
      />
      <label htmlFor={value}>{label}</label>
      {errorMessage && <ErrorLabel message={errorMessage} />}
    </div>
  );
};

export default Radio;
