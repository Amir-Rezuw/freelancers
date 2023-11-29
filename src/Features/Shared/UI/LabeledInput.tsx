import { FormEvent } from "react";

interface IProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: FormEvent<HTMLInputElement>) => void;
}

const LabeledInput = ({ label, name, onChange, value }: IProps) => {
  return (
    <>
      <label
        className="mb-2 block"
        htmlFor={name}
      >
        {label}
      </label>
      <input
        onChange={onChange}
        value={value}
        id={name}
        className="text-input w-full"
        type="text"
      />
    </>
  );
};

export default LabeledInput;
