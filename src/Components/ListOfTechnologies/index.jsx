import { LiTech } from "./style";
import { CardTechLi } from "../CardTechsLi";
import { useContext } from "react";
import { TechsContext } from "../../Contexts/TechsContext";
export const ListOfTechnologies = () => {
  const { dataUserTechs } = useContext(TechsContext);

  if (dataUserTechs.length !== 0) {
    return (
      <LiTech>
        {dataUserTechs[0].map((tech) => (
          <CardTechLi tech={tech} key={tech.id} />
        ))}
      </LiTech>
    );
  } else {
    return <></>;
  }
};
