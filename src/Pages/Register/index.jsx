import { RegisterContainer } from "./style";
// Para o formulario-Instalar :yarn add yup react-hook-form @hookform/resolvers
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../../Assets/Logo.png";
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

export const Register = () => {
  const navigate = useNavigate();
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
        console.log(response.data);
        navigate("/login");
        sucessRegister("Registro realizado com sucesso!");
      })
      .catch((err) => {
        toast.error(`Houve um erro: ${err.message}`);
      });
  };
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
            type="text"
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
          <select name="" id="course_module" {...register("course_module")}>
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
