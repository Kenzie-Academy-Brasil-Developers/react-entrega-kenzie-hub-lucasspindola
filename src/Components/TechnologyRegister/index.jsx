import { ContainerRegisterTech } from "./style";
import { useForm } from "react-hook-form";
import axios from "axios";
import { json } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../Contexts/UserContext";

export const TechnologyRegister = () => {
  const { dataUser, setDataUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const newTech = (dataTech) => {
    const token = window.localStorage.getItem("authToken");
    // console.log(token);
    // console.log(dataTech);
    axios
      .post("https://kenziehub.herokuapp.com/users/techs", dataTech, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // console.log(dataUser);

  return (
    // tag Form
    <ContainerRegisterTech onSubmit={handleSubmit(newTech)}>
      <div className="titleContainerTech">
        <h3>Cadastrar Tecnologia</h3>
        <button className="btnExitRegister">X</button>
      </div>

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
      <button className="btnRegisterTech">Cadastrar</button>
    </ContainerRegisterTech>
  );
};
