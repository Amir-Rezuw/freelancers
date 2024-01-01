import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import { useDarkThemeProvider } from "../Context/DarkMode.ctx";

interface IProps {}

const DarkModeToggle = ({}: IProps) => {
  const { isDarkMode, toggleTheme } = useDarkThemeProvider();
  return (
    <>
      {isDarkMode ? (
        <button onClick={toggleTheme}>
          <HiOutlineSun className="w-5 h-5 text-primary-blue-900" />
        </button>
      ) : (
        <button onClick={toggleTheme}>
          <HiOutlineMoon className="w-5 h-5 text-primary-blue-900" />
        </button>
      )}
    </>
  );
};

export default DarkModeToggle;
