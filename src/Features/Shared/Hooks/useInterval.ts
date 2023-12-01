import { useEffect, useState } from "react";

const useInterval = ({
  duration,
  delay,
  step,
}: {
  duration: number;
  delay: number;
  step: number;
}) => {
  const [timer, setTimer] = useState(duration);
  useEffect(() => {
    const intervalId =
      timer > 0 &&
      setInterval(() => {
        setTimer((currentValue) => currentValue - step);
      }, delay);
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [timer]);
  const reset = () => {
    setTimer(duration);
  };
  return { timer, reset };
};

export default useInterval;
