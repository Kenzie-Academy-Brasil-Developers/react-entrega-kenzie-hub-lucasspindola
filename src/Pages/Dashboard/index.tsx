import { ContainerDashboard } from "./style";
import { Navigate } from "react-router-dom";
import logo from "../../Assets/Logo.png";
import { ListOfTechnologies } from "../../Components/ListOfTechnologies";
import { TechsContext } from "../../Contexts/TechsContext";
import { useContext } from "react";

export interface iTechnologyRegister {
  setModalRegister: React.Dispatch<React.SetStateAction<boolean>>;
  modalRegister: boolean;
}

export const Dashboard = ({
  modalRegister,
  setModalRegister,
}: iTechnologyRegister) => {
  const { logout, token, userData, courseModule } = useContext(TechsContext);
  // let userName = userData.replace(/'/g, "");

  return (
    <>
      {token ? (
        <ContainerDashboard>
          <header>
            <img src={logo} alt="oi"></img>
            <button onClick={() => logout()}>Sair</button>
          </header>
          <div className="containerInformationsProfile">
            <h2>Olá, {JSON.parse(userData)}</h2>
            <p className="moduleUser">{JSON.parse(courseModule)}</p>
          </div>
          <div className="containerTitleUl">
            <span>Tecnologias</span>
            <button onClick={() => setModalRegister(!modalRegister)}>+</button>
          </div>
          <main>
            <ListOfTechnologies />
          </main>
        </ContainerDashboard>
      ) : (
        <Navigate to="/login" replace />
      )}
    </>
  );
};
