import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { useEffect } from "react";

export const TechsContext = createContext({});

export const TechsContextProvider = ({ children }) => {
  const token = window.localStorage.getItem("authToken") || "";
  const userData =
    JSON.parse(window.localStorage.getItem("user-kenzieHub")) || "";
  const sucessLogout = (message) => {
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
  const [dataUserTechs, setDataUserTechs] = useState([]);

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
          .then((res) => {
            setDataUserTechs([res.data.techs]);
          })
          .catch((err) => {});
    }
    updatedList();
  }, [dataUserTechs]);

  return (
    <TechsContext.Provider
      value={{ logout, token, userData, dataUserTechs, setDataUserTechs }}
    >
      {children}
    </TechsContext.Provider>
  );
};
