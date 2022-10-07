import { LoginContainer } from "./style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import logo from "../../Assets/Logo.png";

const schema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required(),
});
export const Login = () => {
  const sucessLogin = (message) => {
    toast.success(message);
  };
  // const redirectExistingLogin = () => {
  //   const token = window.localStorage.getItem("authToken");
  //   if (token !== undefined) {
  //     navigate("/dashboard");
  //     sucessLogin("Você já esta logado!");
  //   }
  // };
  // redirectExistingLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  // console.log(errors);
  const navigate = useNavigate();
  const loginUser = (data) => {
    axios
      .post("https://kenziehub.herokuapp.com/sessions", data)
      .then((res) => {
        // console.log(res.data);
        window.localStorage.clear();
        window.localStorage.setItem(
          "user-kenzieHub",
          JSON.stringify(res.data.user)
        );
        window.localStorage.setItem("authToken", res.data.token);
        res.data.token && sucessLogin("Login realizado com sucesso!");
        navigate("/dashboard");
      })
      .catch((err) => console.log(err));
    // console.log(data);
  };
  return (
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
          <label htmlFor="password">Senha</label>
          <input
            id="password"
            placeholder="Digite aqui sua senha"
            type="password"
            {...register("password")}
          />
          <button className="btnLogin">Login</button>
          <a className="ancoraLinkRegister" href="f">
            Ainda não possui uma conta?
          </a>
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
  );
};
