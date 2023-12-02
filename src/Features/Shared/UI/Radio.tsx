import { ChangeEvent, Fragment } from "react";
import { UserTypes } from "../../../Constants/Enums/Shared";

interface IProps {
  label: string;
  onChange: (e: ChangeEvent) => void;
  classNames?: string;
  name: string;
  value: UserTypes;
  [key: string]: any;
}

const Radio = ({
  classNames,
  label,
  value,
  onChange,
  name,
  ...rest
}: IProps) => {
  return (
    <Fragment>
      <input
        className={`form-radio text-primary-blue-600 focus:ring-primary-blue-600 ${classNames}`}
        name={name}
        onChange={onChange}
        type="radio"
        value={value}
        id={value}
        {...rest}
      />
      <label htmlFor={value}>{label}</label>
    </Fragment>
  );
};

export default Radio;
