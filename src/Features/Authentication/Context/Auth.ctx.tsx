import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
interface IAuthCtx {
  phoneNumber: string;
  setPhoneNumber: Dispatch<SetStateAction<string>>;
  isUserLoggedIn: boolean;
  setIsUserLoggedIn: Dispatch<SetStateAction<boolean>>;
}
const AuthCtx = createContext<IAuthCtx>({
  phoneNumber: "",
  setPhoneNumber: () => {},
  isUserLoggedIn: false,
  setIsUserLoggedIn: () => {},
});

const AuthCtxProvider = ({ children }: { children: ReactNode }) => {
  const storageLogin = localStorage.getItem("isUserLoggedIn") === "true";

  const [isUserLoggedIn, setIsUserLoggedIn] = useState(storageLogin);
  const [phoneNumber, setPhoneNumber] = useState("");
  return (
    <AuthCtx.Provider
      value={{
        phoneNumber,
        setPhoneNumber,
        isUserLoggedIn,
        setIsUserLoggedIn,
      }}>
      {children}
    </AuthCtx.Provider>
  );
};
export default AuthCtxProvider;
export const useAuthCtx = () => {
  return useContext(AuthCtx);
};
