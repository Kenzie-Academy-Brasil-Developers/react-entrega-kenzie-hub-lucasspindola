import { LoginContainer } from "./style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Navigate, useNavigate } from "react-router-dom";
import logo from "../../Assets/Logo.png";
import { useContext } from "react";
import { UserContext } from "../../Contexts/UserContext";

const schema = yup.object().shape({
  email: yup
    .string()
    .required("Campo Obrigatório!")
    .email("Digite um email valido!"),
  password: yup.string().required("Campo Obrigatório!"),
});
export const Login = () => {
  const { loginUser } = useContext(UserContext);
  // const token = window.localStorage.getItem("authToken") || "";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();
  // <Navigate to="/" replace />
  return (
    <>
      <LoginContainer>
        <div className="containerLogo">
          <img src={logo} alt="LOGO-KENZIE-HUB" />
        </div>

        <div className="containerFormLogin">
          <div className="ContainerTitleFormLogin">
            <h3>Login</h3>
          </div>
          <form onSubmit={handleSubmit(loginUser)}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              placeholder="Digite aqui seu email"
              type="text"
              {...register("email")}
            />
            {<p>{errors.email?.message}</p>}
            <label htmlFor="password">Senha</label>
            <input
              id="password"
              placeholder="Digite aqui sua senha"
              type="password"
              {...register("password")}
            />
            {<p>{errors.password?.message}</p>}
            <button className="btnLogin">Entrar</button>
            <p className="ancoraLinkRegister" href="f">
              Ainda não possui uma conta?
            </p>
          </form>
          <div className="containerBtnRedirectRegister">
            <button
              onClick={() => {
                navigate("/register");
              }}
              className="btnForRegister"
            >
              Cadastre-se
            </button>
          </div>
        </div>
      </LoginContainer>
    </>
  );
};
