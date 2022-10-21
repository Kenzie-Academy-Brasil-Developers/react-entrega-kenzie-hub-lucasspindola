import { ReactNode, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { useEffect } from "react";
interface iTechsContextsProps {
  children: ReactNode;
}
interface iTechContext {
  logout: () => void;
  dataUserTechs: [];
  setDataUserTechs: React.Dispatch<React.SetStateAction<[]>>;
  token: string;
  userData: string;
  courseModule: string;
}
export const TechsContext = createContext<iTechContext>({} as iTechContext);

export const TechsContextProvider = ({ children }: iTechsContextsProps) => {
  const token = window.localStorage.getItem("authToken") || "";
  const userData = localStorage.getItem("user-kenzieHub") || "";
  const courseModule = localStorage.getItem("course_module") || "";
  const sucessLogout = (message: string) => {
    toast.success(message);
  };
  const navigate = useNavigate();
  const logout = () => {
    window.localStorage.removeItem("authToken");
    window.localStorage.removeItem("user-kenzieHub");
    navigate("/login");
    sucessLogout("Sua sessão foi encerrada com sucesso!");
  };

  // ListOfTechnologies
  const [dataUserTechs, setDataUserTechs] = useState<[]>([]);

  useEffect(() => {
    function updatedList() {
      const token = window.localStorage.getItem("authToken");

      token &&
        axios
          .get(`https://kenziehub.herokuapp.com/profile`, {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          })
          .then((res: any) => {
            setDataUserTechs(res.data.techs);
          })
          .catch((err) => {});
    }
    updatedList();
  }, [dataUserTechs]);

  return (
    <TechsContext.Provider
      value={{
        logout,
        token,
        userData,
        dataUserTechs,
        setDataUserTechs,
        courseModule,
      }}
    >
      {children}
    </TechsContext.Provider>
  );
};
