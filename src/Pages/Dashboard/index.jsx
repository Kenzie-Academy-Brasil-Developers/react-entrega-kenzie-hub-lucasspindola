import { ContainerDashboard } from "./style";
import { useNavigate, Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../../Assets/Logo.png";
export const Dashboard = () => {
  const token = window.localStorage.getItem("authToken") || "";
  const userData =
    JSON.parse(window.localStorage.getItem("user-kenzieHub")) || "";
  const sucessLogout = (message) => {
    toast(message, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
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
            <p>{userData.course_module}</p>
          </div>
        </ContainerDashboard>
      ) : (
        <Navigate to="/login" replace />
      )}
    </>
  );
};
