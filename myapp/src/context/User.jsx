import { createContext, useState } from "react";

export const Contex = createContext({
  forgetHide: false,
  setForgetHide: () => {},
  assetTerm: "",
  setAssetTerm: () => {},
  setIsLogin: () => {},
  islogin: false,
});

export const UserProvider = ({ children }) => {
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
