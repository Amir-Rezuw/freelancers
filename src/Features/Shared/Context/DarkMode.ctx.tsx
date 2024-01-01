import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import useToggleState from "../Hooks/useToggleState";
interface ICtxValues {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const DarkModeCtx = createContext<ICtxValues>({
  isDarkMode: false,
  toggleTheme: () => {},
});
const DarkModeProvider = ({ children }: { children: ReactNode }) => {
  const preferredTheme = window.matchMedia(
    "(prefers-color-scheme:dark)"
  ).matches;
  const theme = JSON.parse(localStorage.getItem("isDarkMode") ?? "{}");
  const [isDarkMode, setIsDarkMode] = useState(theme ?? preferredTheme);
  const toggleTheme = () => {
    useToggleState(setIsDarkMode);
  };

  useEffect(() => {
    localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode));
    if (isDarkMode) {
      document.documentElement.classList.add("dark-mode");
      document.documentElement.classList.remove("light-mode");
    } else {
      document.documentElement.classList.add("light-mode");
      document.documentElement.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  return (
    <DarkModeCtx.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </DarkModeCtx.Provider>
  );
};
export default DarkModeProvider;
export const useDarkThemeProvider = () => {
  return useContext(DarkModeCtx);
};
