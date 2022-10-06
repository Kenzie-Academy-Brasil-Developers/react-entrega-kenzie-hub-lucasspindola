import { LoginContainer } from "./style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

const schema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required(),
});
export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  console.log(errors);
  const loginUser = (data) => {
    axios
      .post("https://kenziehub.herokuapp.com/sessions", data)
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
    console.log(data);
  };
  return (
    <LoginContainer>
      <div className="containerLogo">
        <img src="" alt="LOGO" />
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
          <button className="btnForRegister">Cadastre-se</button>
        </form>
      </div>
    </LoginContainer>
  );
};
