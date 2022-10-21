import { LiTech } from "./style";
import { CardTechLi } from "../CardTechsLi";
import { useContext } from "react";
import { TechsContext } from "../../Contexts/TechsContext";

export interface iTechProps {
  id: string;
  title: string;
  status: string;
  created_at: string;
  updated_at: string;
}
export const ListOfTechnologies = () => {
  const { dataUserTechs } = useContext(TechsContext);

  if (dataUserTechs.length !== 0) {
    return (
      <LiTech>
        {dataUserTechs.map((tech: iTechProps) => (
          <CardTechLi tech={tech} key={tech.id} />
        ))}
      </LiTech>
    );
  } else {
    return <></>;
  }
};
