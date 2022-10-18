import { ContainerRegisterTech, Container } from "./style";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";

export const TechnologyRegister = ({ setModalRegister }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const newTech = (dataTech) => {
    const token = window.localStorage.getItem("authToken");
    axios
      .post("https://kenziehub.herokuapp.com/users/techs", dataTech, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        // console.log(res);
        res && toast.success("Cadastro realizado com sucesso!");
        setModalRegister(false);
      })
      .catch((err) => {
        // console.log(err);
        err.name &&
          toast.error("Ops!!Verifique se você já tem a tecnologia cadastrada!");
      });
  };
  return (
    <Container>
      <ContainerRegisterTech onSubmit={handleSubmit(newTech)}>
        <div className="titleContainerTech">
          <h3>Cadastrar Tecnologia</h3>
          <button
            type="click"
            onClick={() => {
              setModalRegister(false);
            }}
            className="btnExitRegister"
          >
            X
          </button>
        </div>
        <form className="formRegister">
          <div className="contains">
            <label htmlFor="title">Nome</label>
            <input
              id="title"
              placeholder="Tecnologia a ser cadastrada"
              {...register("title")}
            />
          </div>
          <div className="contains">
            <label>Selecionar Status</label>
            <select id="" {...register("status")}>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
          </div>
          <button type="submit" className="btnRegisterTech">
            Cadastrar
          </button>
        </form>
      </ContainerRegisterTech>
    </Container>
  );
};
