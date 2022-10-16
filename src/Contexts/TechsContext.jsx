import { createContext } from "react";

export const TechsContext = createContext({});
const x = 1;
export const TechsContextProvider = ({ childrens }) => {
  return (
    <TechsContext.Provider value={{ x }}>{childrens}</TechsContext.Provider>
  );
};
