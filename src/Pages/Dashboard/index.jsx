import { ContainerDashboard } from "./style";
import { useNavigate, Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../../Assets/Logo.png";
export const Dashboard = () => {
  const token = window.localStorage.getItem("authToken") || "";
  const userData =
    JSON.parse(window.localStorage.getItem("user-kenzieHub")) || "";
  const sucessLogout = (message) => {
    toast.success(message);
  };
  const navigate = useNavigate();
  const logout = () => {
    window.localStorage.removeItem("authToken");
    window.localStorage.removeItem("user-kenzieHub");
    navigate("/login");
    sucessLogout("Sua sessão foi encerrada com sucesso!");
  };
  return (
    <>
      {token ? (
        <ContainerDashboard>
          <header>
            <img src={logo} alt="oi"></img>
            <button onClick={() => logout()}>Sair</button>
          </header>
          <div className="containerInformationsProfile">
            <h2>Olá, {userData.name}</h2>
            <p className="moduleUser">{userData.course_module}</p>
          </div>

          <main>
            <span>Que pena! Estamos em desenvolvimento :(</span>
            <span className="explication">
              Nossa aplicação está em desenvolvimento, em breve teremos
              novidades
            </span>
          </main>
        </ContainerDashboard>
      ) : (
        <Navigate to="/login" replace />
      )}
    </>
  );
};
