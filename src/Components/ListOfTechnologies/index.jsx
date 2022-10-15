import { LiTech } from "./style";
// import { CardTechLi } from "../CardTechsLi";
import { CardTechLi } from "../CardTechsLi";
// import { UserContext } from "../../Contexts/UserContext";
// import { useContext } from "react";
// import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
// import { TechnologyRegister } from "../TechnologyRegister";

export const ListOfTechnologies = () => {
  // const { dataUser } = useContext(UserContext);
  const [dataUserTechs, setDataUserTechs] = useState([]);

  function updatedList() {
    const token = window.localStorage.getItem("authToken");

    token &&
      axios
        .get("https://kenziehub.herokuapp.com/profile", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setDataUserTechs([res.data.techs]);
        })
        .catch((err) => {});
  }
  updatedList();

  if (dataUserTechs.length !== 0) {
    return (
      <LiTech>
        {dataUserTechs[0].map((tech) => (
          <CardTechLi tech={tech} key={tech.id} />
        ))}
      </LiTech>
    );
  } else {
    return <h1>Oii</h1>;
  }
};
