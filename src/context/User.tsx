import type { ReactNode } from "react";
import { createContext, useState } from "react";

interface UserContextType {
  forgetHide: boolean;
  setForgetHide: (value: boolean) => void;
  assetTerm: string;
  setAssetTerm: (value: string) => void;
}

export const Contex = createContext<UserContextType>({
  forgetHide: false,
  setForgetHide: () => {},
  assetTerm: "",
  setAssetTerm: () => {},
});

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [forgetHide, setForgetHide] = useState(false);
  const [assetTerm, setAssetTerm] = useState("");

  return (
    <Contex.Provider
      value={{ forgetHide, setForgetHide, assetTerm, setAssetTerm }}
    >
      {children}
    </Contex.Provider>
  );
};
