import React, { ReactNode, createContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { iTech } from "./TechsContext";

interface iUserContextProps {
  children: ReactNode;
}

interface iWorks {
  id: string;
  title: string;
  description: string;
  deploy_url: string;
  created_at: string;
  updated_at: string;
}
export interface iLoginResponse {
  id: string;
  name: string;
  email: string;
  course_module: string;
  bio: string;
  contact: string;
  created_at: string;
  updated_at: string;
  techs: iTech[];
  works: iWorks[];
  avatar_url: null;
}
interface iLoginToken {
  token: string;
  user: iLoginResponse;
}
export interface iRegisterUser {
  email: string;
  password: string;
  passwordConfirm: string;
  name: string;
  bio: string;
  contact: string;
  course_module: string;
}
export interface iLogin {
  email: string;
  password: string;
}

export interface iUserContext {
  loginUser: (data: iLogin) => void;
  registerUser: (data: iRegisterUser) => void;
  userAllData: iLoginResponse;
}
export const UserContext = createContext({} as iUserContext);

export const UserContextProvider = ({ children }: iUserContextProps) => {
  const [userAllData, setUserAllData] = useState<iLoginResponse>(
    {} as iLoginResponse
  );

  const navigate = useNavigate();

  useEffect(() => {
    async function updateUser() {
      const token = window.localStorage.getItem("authToken");
      if (token) {
        try {
          return await axios
            .get(`https://kenziehub.herokuapp.com/profile`, {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
            })
            .then((res) => {
              setUserAllData(res.data);
              navigate("/dashboard");
            });
        } catch (error) {
          localStorage.removeItem("authToken");
          navigate("/");
        }
      }
    }
    updateUser();
  }, [navigate]);

  const loginUser = (data: iLogin) => {
    axios
      .post<iLoginToken>("https://kenziehub.herokuapp.com/sessions", data)
      .then((res) => {
        localStorage.removeItem("authToken");
        window.localStorage.setItem("authToken", res.data.token);
        res.data.token && toast.success("Login realizado com sucesso!");
        navigate("/dashboard");
      })

      .catch((err) => {
        toast.error(
          `Ops!Houve um erro. Confira suas informações de cadastro e tente novamente.`
        );
      });
  };
  const sucessRegister = (message: string) => {
    toast(message, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const registerUser = (data: iRegisterUser) => {
    axios
      .post<iLoginResponse>("https://kenziehub.herokuapp.com/users", data)
      .then((response) => {
        navigate("/login");
        sucessRegister("Registro realizado com sucesso!");
      })
      .catch((err) => {
        toast.error(`Ops, houve um erro em nosso servidor. Tente novamente!`);
      });
  };

  return (
    <UserContext.Provider
      value={{
        loginUser,
        registerUser,
        userAllData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
