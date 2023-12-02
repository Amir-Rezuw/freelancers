import { FormEvent, Fragment, HTMLInputTypeAttribute, forwardRef } from "react";

interface IProps {
  label: string;
  name: string;
  value?: string;
  onChange?: (e: FormEvent<HTMLInputElement>) => void;
  type: HTMLInputTypeAttribute;
  inputDirection: "rtl" | "ltr";

  [key: string]: any;
}

const LabeledInput = forwardRef<HTMLInputElement | null, IProps>(
  (
    { label, name, onChange, value, type, inputDirection, ...rest }: IProps,
    ref
  ) => {
    return (
      <Fragment>
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
          ref={ref}
          {...rest}
        />
      </Fragment>
    );
  }
);

export default LabeledInput;
