import type { ReactNode } from "react";
import { createContext, useState } from "react";

interface UserContextType {
  forgetHide: boolean;
  setForgetHide: (value: boolean) => void;
  assetTerm: string;
  setAssetTerm: (value: string) => void;
  setIsLogin: (value: boolean) => void;
  islogin: boolean;
}

export const Contex = createContext<UserContextType>({
  forgetHide: false,
  setForgetHide: () => {},
  assetTerm: "",
  setAssetTerm: () => {},
  setIsLogin: () => {},
  islogin: false,
});

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [forgetHide, setForgetHide] = useState(false);
  const [assetTerm, setAssetTerm] = useState("");
  const [islogin, setIsLogin] = useState(false);

  return (
    <Contex.Provider
      value={{
        forgetHide,
        setForgetHide,
        assetTerm,
        setAssetTerm,
        setIsLogin,
        islogin,
      }}
    >
      {children}
    </Contex.Provider>
  );
};
