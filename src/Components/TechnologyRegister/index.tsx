import { ContainerRegisterTech, Container } from "./style";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";

interface iTechnologyRegister {
  setModalRegister: React.Dispatch<React.SetStateAction<boolean>>;
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

  // const { dataUserTechs, setDataUserTechs } = useContext(TechsContext);
  const newTech = (dataTech: iNewTech) => {
    const token = window.localStorage.getItem("authToken");
    // setDataUserTechs(...dataUserTechs)
    axios
      .post("https://kenziehub.herokuapp.com/users/techs", dataTech, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        res && toast.success("Cadastro realizado com sucesso!");
        setModalRegister(false);
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
