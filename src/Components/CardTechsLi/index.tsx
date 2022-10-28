import { HiOutlineTrash } from "react-icons/hi";
import axios from "axios";
import { toast } from "react-toastify";
import { iTechProps } from "../ListOfTechnologies";
import { useContext } from "react";
import { TechsContext } from "../../Contexts/TechsContext";

interface iPropsList {
  tech: iTechProps;
}

export const CardTechLi = ({ tech }: iPropsList) => {
  const { setBoleean } = useContext(TechsContext);
  const techDelete = async (id: string) => {
    const token = window.localStorage.getItem("authToken");
    await axios
      .delete(`https://kenziehub.herokuapp.com/users/techs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setBoleean((old) => !old);
        res && toast.success("Deletado com sucesso!");
      })
      .catch((err) => {
        err && toast.error("Ops, houve um erro, tente novamente!");
      });
  };

  return (
    <li>
      <h3>{tech.title}</h3>
      <div>
        <span>{tech.status}</span>
        <button onClick={() => techDelete(tech.id)}>
          <HiOutlineTrash />
        </button>
      </div>
    </li>
  );
};
