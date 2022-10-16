import "./App.css";
import GlobalStyle from "./Global/globalStyle";

import { Routes, Route, Navigate } from "react-router-dom";
import { Register } from "./Pages/Register";
import { Login } from "./Pages/Login";
import { ToastContainer } from "react-toastify";
import { Dashboard } from "./Pages/Dashboard";

import "react-toastify/dist/ReactToastify.min.css";
import { UserContextProvider } from "./Contexts/UserContext";
import { TechnologyRegister } from "./Components/TechnologyRegister";

import { useState } from "react";
function App() {
  // const { modalRegister, setModalRegister } = useContext(UserContext);
  // useEffect(() => {
  //   setModalRegister(modalRegister);
  // }, [modalRegister, setModalRegister]);

  const [modalRegister, setModalRegister] = useState(false);
  return (
    <>
      <GlobalStyle />

      <UserContextProvider>
        {modalRegister === true ? (
          <TechnologyRegister setModalRegister={setModalRegister} />
        ) : (
          <></>
        )}

        {/* <TechnologyRegister /> */}
        <Routes>
          <Route path="/" element={<Navigate to={"/login"} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/dashboard"
            element={
              <Dashboard
                modalRegister={modalRegister}
                setModalRegister={setModalRegister}
              />
            }
          />
        </Routes>
      </UserContextProvider>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        toastStyle={{ backgroundColor: "black", color: "white" }}
      />
    </>
  );
}

export default App;
