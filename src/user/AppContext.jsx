
import { createContext, useState, useContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [id, setId] = useState(12);

  return <AppContext.Provider value={{ id, setId }}>{children}</AppContext.Provider>;
};


export const useAppContext = () => useContext(AppContext);
