import { TechsContextProvider } from "../../Contexts/TechsContext";
import { UserContextProvider } from "../../Contexts/UserContext";

export const AllContexts = ({ children }) => {
  return (
    <UserContextProvider>
      <TechsContextProvider>{children}</TechsContextProvider>
    </UserContextProvider>
  );
};
