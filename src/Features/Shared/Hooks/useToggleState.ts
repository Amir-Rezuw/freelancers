import { Dispatch, SetStateAction } from "react";

const useToggleState = (
  setterFunction: Dispatch<SetStateAction<boolean>>,
  preferredValue?: boolean
) => {
  setterFunction((perviousValue) => preferredValue ?? !perviousValue);
};

export default useToggleState;
