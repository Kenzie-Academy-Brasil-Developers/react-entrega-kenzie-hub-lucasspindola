import { HiOutlineTrash } from "react-icons/hi";
import axios from "axios";
import { toast } from "react-toastify";
// import { apiBaseKenzieHub } from "../../Services/api";
///////////////////

// Problema: Esta deletando todas, n respeita o onclick.
export const CardTechLi = ({ tech }) => {
  // const id = tech.id;
  const techDelete = async (id) => {
    const token = window.localStorage.getItem("authToken");
    await axios
      .delete(`https://kenziehub.herokuapp.com/users/techs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        res && toast.success("Deletado com sucesso!");
      })
      .catch((err) => {
        console.log(err);
        err && toast.error("Ops, houve um erro, tente novamente!");
      });
  };

  return (
    <li>
      <h3>{tech.title}</h3>

      <div>
        <span>{tech.status}</span>

        <button onClick={() => techDelete(tech.id)}>
          {/* onClick={techDelete(tech.id)} */}
          <HiOutlineTrash />
        </button>
      </div>
    </li>
  );
};
