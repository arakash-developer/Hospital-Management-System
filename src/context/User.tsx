import { createContext, useState } from "react";
import type { ReactNode } from "react";

interface UserContextType {
  forgetHide: boolean;
  setForgetHide: (value: boolean) => void;
}

export const Contex = createContext<UserContextType>({
  forgetHide: false,
  setForgetHide: () => {},
});

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [forgetHide, setForgetHide] = useState(false);

  return (
    <Contex.Provider value={{ forgetHide, setForgetHide }}>
      {children}
    </Contex.Provider>
  );
};
