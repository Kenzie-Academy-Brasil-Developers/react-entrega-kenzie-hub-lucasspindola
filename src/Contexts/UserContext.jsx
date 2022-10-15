import { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
export const UserContext = createContext({});

const testPassword = new RegExp(
  "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
);
const schema = yup.object().shape({
  name: yup.string().required("Campo Obrigatório!"),
  email: yup
    .string()
    .required("Campo Obrigatório!")
    .email("Digite um email valido"),
  password: yup
    .string()
    .required("Campo Obrigatório!")
    .matches(
      testPassword,
      "E necessário no mínimo 8 dígitos, uma letra maiúsculos, uma minúscula e um caractere especial"
    ),
  passwordConfirm: yup
    .string()
    .required("Campo Obrigatório!")
    .oneOf([yup.ref("password"), null], "As senhas precisam ser iguais!"),
  bio: yup.string().required("Campo Obrigatório!"),
  contact: yup.string().required("Campo Obrigatório!"),
});

export const UserContextProvider = ({ children }) => {
  const [dataUser, setDataUser] = useState([]);
  const navigate = useNavigate();

  const loginUser = (data) => {
    axios
      .post("https://kenziehub.herokuapp.com/sessions", data)
      .then((res) => {
        window.localStorage.clear();

        // Tirando do localStorage os dados,
        // deixando apenas o nome para caso haja problema com api
        // o nome pelo menos se mantenha.
        window.localStorage.setItem(
          "user-kenzieHub",
          JSON.stringify(res.data.user.name)
          //   setDataUser([res.data.user.techs])
          //   console.log(res.data.user.techs)
        );

        setDataUser(res.data.token);
        window.localStorage.setItem("authToken", res.data.token);
        res.data.token && toast.success("Login realizado com sucesso!");
        navigate("/dashboard");
      })
      .catch((err) => {
        // console.log(err);
        toast.error(`Ops!Houve um erro`);
      });
  };

  //   const navigate = useNavigate();
  const sucessRegister = (message) => {
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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const registerUser = (data) => {
    axios
      .post("https://kenziehub.herokuapp.com/users", data)
      .then((response) => {
        // console.log(response.data);
        navigate("/login");
        sucessRegister("Registro realizado com sucesso!");
      })
      .catch((err) => {
        toast.error(`Houve um erro: ${err.message}`);
      });
  };

  return (
    <UserContext.Provider
      value={{
        loginUser,
        registerUser,
        register,
        handleSubmit,
        errors,
        dataUser,
        setDataUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
