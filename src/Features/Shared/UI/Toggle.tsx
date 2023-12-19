import { Switch } from "@headlessui/react";
import IsVisible from "./IsVisible";
import { Fragment } from "react";

interface IProps {
  label?: string;
  isActive: boolean;
  onChange: () => void;
  disabled?: boolean;
}

const Toggle = ({ isActive, label, onChange, disabled }: IProps) => {
  return (
    <Fragment>
      <Switch.Group>
        <div className="flex items-center gap-x-2">
          <IsVisible isVisible={!!label}>
            <Switch.Label>{label}</Switch.Label>
          </IsVisible>

          <Switch
            disabled={disabled}
            checked={isActive}
            onChange={onChange}
            className={`${
              isActive ? "bg-primary-blue-600" : "bg-primary-gray-200"
            } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none
            disabled:opacity-50
            `}
          >
            <span
              className={`${
                isActive ? "-translate-x-6" : "-translate-x-1"
              } inline-block h-4 w-4 transform rounded-full bg-primary-gray-0 transition`}
            />
          </Switch>
        </div>
      </Switch.Group>
    </Fragment>
  );
};

export default Toggle;
