import { ReactNode, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { useEffect } from "react";
import { iLoginResponse } from "./UserContext";
interface iTechsContextsProps {
  children: ReactNode;
}

interface iTech {
  created_at: string;
  id: string;
  status: string;
  title: string;
  updated_at: string;
}
interface iTechContext {
  logout: () => void;
  dataUserTechs: iTech[];
  setDataUserTechs: React.Dispatch<React.SetStateAction<[]>>;
  token: string;
  userData: string;
  courseModule: string;
}
export const TechsContext = createContext<iTechContext>({} as iTechContext);

export const TechsContextProvider = ({ children }: iTechsContextsProps) => {
  const token = window.localStorage.getItem("authToken") || "";
  const userData = localStorage.getItem("@user-kenzieHub") || "";

  const courseModule = localStorage.getItem("course_module") || "";
  const sucessLogout = (message: string) => {
    toast.success(message);
  };
  const navigate = useNavigate();
  const logout = () => {
    window.localStorage.removeItem("authToken");
    window.localStorage.removeItem("@user-kenzieHub");
    localStorage.removeItem("course_module");
    navigate("/login");
    sucessLogout("Sua sessão foi encerrada com sucesso!");
  };

  // interface IupdateList {
  //   iLoginrespo

  // }
  const [dataUserTechs, setDataUserTechs] = useState<[]>([]);
  useEffect(() => {
    function updatedList() {
      const token = window.localStorage.getItem("authToken");

      token &&
        axios
          .get<iLoginResponse>(`https://kenziehub.herokuapp.com/profile`, {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          })
          .then((res) => {
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
