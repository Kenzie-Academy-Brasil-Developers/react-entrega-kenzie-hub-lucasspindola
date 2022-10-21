import React, { ReactNode, createContext, useEffect } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface iUserContextProps {
  children: ReactNode;
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
// interface iDataUser {

// }

export interface iUserContext {
  loginUser: (data: iLogin) => void;
  registerUser: (data: iRegisterUser) => void;
}
export const UserContext = createContext({} as iUserContext);

export const UserContextProvider = ({ children }: iUserContextProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
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
            .then(() => navigate("/dashboard"));
        } catch (error) {
          localStorage.removeItem("authToken");
          navigate("/");
        }
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loginUser = (data: iLogin) => {
    axios
      .post("https://kenziehub.herokuapp.com/sessions", data)
      .then((res) => {
        console.log(res.data.user.name);
        window.localStorage.clear();
        // console.log(res.data.user.course_module);
        window.localStorage.setItem(
          "@user-kenzieHub",
          JSON.stringify(res.data.user.name)
        );

        window.localStorage.setItem("authToken", res.data.token);
        res.data.token && toast.success("Login realizado com sucesso!");
        navigate("/dashboard");

        window.localStorage.setItem(
          "course_module",
          JSON.stringify(res.data.user.course_module)
        );
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
      .post("https://kenziehub.herokuapp.com/users", data)
      .then((response) => {
        // console.log(response.data);
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
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
