import "./App.css";
import GlobalStyle from "./Global/globalStyle";

import { Routes, Route, Navigate } from "react-router-dom";
import { Register } from "./Pages/Register";
import { Login } from "./Pages/Login";
import { ToastContainer } from "react-toastify";
import { Dashboard } from "./Pages/Dashboard";

import "react-toastify/dist/ReactToastify.min.css";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Navigate to={"/login"} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
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
