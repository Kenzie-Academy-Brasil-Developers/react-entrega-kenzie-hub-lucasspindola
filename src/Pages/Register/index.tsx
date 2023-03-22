import { RegisterContainer } from "./style";

import { useNavigate } from "react-router-dom";

import logo from "../../Assets/Logo.png";
import { useContext } from "react";
import { iRegisterUser, UserContext } from "../../Contexts/UserContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const testPassword = new RegExp("^(?=.*\\d).{8,}$");

const schema = yup.object().shape({
  name: yup.string().required("Campo obrigatório!"),
  email: yup
    .string()
    .required("Campo obrigatório!")
    .email("Digite um email válido"),
  password: yup
    .string()
    .required("Campo obrigatório!")
    .matches(
      testPassword,
      "São obrigatórios pelo menos 8 caracteres, sendo pelo menos um numero."
    ),
  passwordConfirm: yup
    .string()
    .required("Campo obrigatório!")
    .oneOf([yup.ref("password"), null], "É necessário que as senhas sejam idênticas."),
  bio: yup.string().required("Campo obrigatório!"),
  contact: yup.string().required("Campo obrigatório!"),
});
export const Register = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegisterUser>({
    resolver: yupResolver(schema),
  });

  const { registerUser } = useContext(UserContext);
  return (
    <RegisterContainer>
      <div className="containerLogoAndBtnReturn">
        <img src={logo} alt="LOGO" />

        <button className="returnBtn" onClick={() => navigate("/login")}>
          Voltar
        </button>
      </div>
      <div className="containerForm">
        <div className="ContainerTitleForm">
          <h3>Crie sua conta</h3>
          <span>Rapido e grátis, vamos nessa</span>
        </div>
        <form onSubmit={handleSubmit(registerUser)}>
          <label htmlFor="name">Nome</label>
          <input
            id="name"
            placeholder="Digite aqui seu nome"
            type="text"
            {...register("name")}
          />
          {<p>{errors.name?.message}</p>}
          <label htmlFor="email">Email</label>
          <input
            id="email"
            placeholder="Digite aqui seu email"
            type="text"
            {...register("email")}
          />
          {<p> {errors.email?.message}</p>}
          <label htmlFor="password">Senha</label>
          <input
            id="password"
            placeholder="Digite aqui sua senha"
            type="password"
            {...register("password")}
          />
          {<p>{errors.password?.message}</p>}
          <label htmlFor="passwordConfirm">Confirmar Senha</label>
          <input
            id="passwordConfirm"
            placeholder="Confirme aqui sua senha"
            type="password"
            {...register("passwordConfirm")}
          />
          {<p>{errors.passwordConfirm?.message}</p>}
          <label htmlFor="bio">Bio</label>
          <input
            id="bio"
            placeholder="Fale sobre você"
            type="text"
            {...register("bio")}
          />
          {<p>{errors.bio?.message}</p>}
          <label htmlFor="contact">Contato</label>
          <input
            id="contact"
            placeholder="Opção de contato"
            type="text"
            {...register("contact")}
          />
          {<p>{errors.contact?.message}</p>}
          <label htmlFor="course_module">Selecionar módulo</label>
          <select id="course_module" {...register("course_module")}>
            <option value="Primeiro módulo (Introdução ao Frontend)">
              Primeiro módulo (Introdução ao Frontend)
            </option>
            <option value="Segundo módulo (Frontend Avançado)">
              Segundo módulo (Frontend Avançado)
            </option>
            <option value="Terceiro módulo (Introdução ao Backend)">
              Terceiro módulo (Introdução ao Backend)
            </option>
            <option value="Quarto módulo (Backend Avançado)">
              Quarto módulo (Backend Avançado)
            </option>
          </select>
          <button className="btnRegister">Cadastrar</button>
        </form>
      </div>
    </RegisterContainer>
  );
};
