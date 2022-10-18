import { ContainerDashboard } from "./style";
import { Navigate } from "react-router-dom";
import logo from "../../Assets/Logo.png";
import { ListOfTechnologies } from "../../Components/ListOfTechnologies";
import { TechsContext } from "../../Contexts/TechsContext";
import { useContext } from "react";

export const Dashboard = ({ modalRegister, setModalRegister }) => {
  const { logout, token, userData } = useContext(TechsContext);

  return (
    <>
      {token ? (
        <ContainerDashboard>
          <header>
            <img src={logo} alt="oi"></img>
            <button onClick={() => logout()}>Sair</button>
          </header>
          <div className="containerInformationsProfile">
            <h2>Olá, {userData}</h2>
            <p className="moduleUser">{userData.course_module}</p>
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
