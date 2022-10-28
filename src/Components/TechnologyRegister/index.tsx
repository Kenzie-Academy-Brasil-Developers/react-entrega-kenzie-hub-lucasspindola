import { ContainerRegisterTech, Container } from "./style";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { useContext } from "react";
import { UserContext } from "../../Contexts/UserContext";
import { TechsContext } from "../../Contexts/TechsContext";

interface iTechnologyRegister {
  setModalRegister: React.Dispatch<React.SetStateAction<boolean>>;
}

interface iNewTechResponse {
  created_at: string;
  id: string;
  status: string;
  title: string;
  updated_at: string;
}

export const TechnologyRegister = ({
  setModalRegister,
}: iTechnologyRegister) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iNewTech>();
  interface iNewTech {
    status: string;
    title: string;
  }
  const { setBoleean } = useContext(TechsContext);
  const newTech = (dataTech: iNewTech) => {
    const token = window.localStorage.getItem("authToken");
    axios
      .post<iNewTechResponse>(
        "https://kenziehub.herokuapp.com/users/techs",
        dataTech,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        res && toast.success("Cadastro realizado com sucesso!");
        setModalRegister(false);
        setBoleean((old) => !old);
      })
      .catch((err) => {
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
