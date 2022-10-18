import "./App.css";
import GlobalStyle from "./Global/globalStyle";
import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer } from "react-toastify";
import { RoutesApp } from "./Components/RoutesApp";
import { TechnologyRegister } from "./Components/TechnologyRegister";

import { useState } from "react";
function App() {
  const [modalRegister, setModalRegister] = useState(false);
  return (
    <>
      <GlobalStyle />

      {modalRegister === true ? (
        <TechnologyRegister setModalRegister={setModalRegister} />
      ) : (
        <></>
      )}
      <RoutesApp
        modalRegister={modalRegister}
        setModalRegister={setModalRegister}
      />

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
