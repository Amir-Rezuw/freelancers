import { useCallback, useEffect } from "react";
interface IProps {
  callBack: () => void;
}
const useEscPress = ({ callBack }: IProps) => {
  const escFunction = useCallback((event: KeyboardEvent) => {
    if (event.key === "Escape") {
      callBack();
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, [escFunction]);
};

export default useEscPress;
