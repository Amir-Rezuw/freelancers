import Logout from "../../Authentication/Logout";
import DarkModeToggle from "./DarkModeToggle";
interface IProps {}

const HeaderMenu = ({}: IProps) => {
  return (
    <ul className="flex gap-x-4 items-center">
      <li className="flex">
        <DarkModeToggle />
      </li>
      <li className="flex">
        <Logout />
      </li>
    </ul>
  );
};

export default HeaderMenu;
