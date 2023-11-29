import { FormEvent, HTMLInputTypeAttribute } from "react";

interface IProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: FormEvent<HTMLInputElement>) => void;
  type: HTMLInputTypeAttribute;
  inputDirection: "rtl" | "ltr";
}

const LabeledInput = ({
  label,
  name,
  onChange,
  value,
  type,
  inputDirection,
}: IProps) => {
  return (
    <>
      <label
        className="mb-2 block"
        htmlFor={name}
      >
        {label}
      </label>
      <input
        dir={inputDirection}
        onChange={onChange}
        value={value}
        id={name}
        className="text-input w-full"
        type={type}
      />
    </>
  );
};

export default LabeledInput;
