import { HiOutlineTrash } from "react-icons/hi";
import axios from "axios";
///////////////////
export const CardTechLi = ({ tech }) => {
  // const id = tech.id;
  const techDelete = async () => {
    const token = window.localStorage.getItem("authToken");
    await axios
      .delete("https://kenziehub.herokuapp.com/users/techs/:tech_id", {
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

    // axios
    //   .delete(`https://kenziehub.herokuapp.com/users/techs/${tech.id}`)
    //   .then((res) => {})
    //   .catch((err) => {});
  };

  /////////////////////
  return (
    <li>
      <h3>{tech.title}</h3>

      <div>
        <span>{tech.status}</span>

        <button id={tech.id}>
          {/* techDelete(tech.id) */}
          <HiOutlineTrash />
        </button>
      </div>
    </li>
  );
};
