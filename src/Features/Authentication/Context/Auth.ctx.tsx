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
}
const AuthCtx = createContext<IAuthCtx>({
  phoneNumber: "",
  setPhoneNumber: () => {},
});

const AuthCtxProvider = ({ children }: { children: ReactNode }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  return (
    <AuthCtx.Provider value={{ phoneNumber, setPhoneNumber }}>
      {children}
    </AuthCtx.Provider>
  );
};
export default AuthCtxProvider;
export const useAuthCtx = () => {
  return useContext(AuthCtx);
};
