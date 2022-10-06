import "./App.css";
import "./Global/reset.css";

import { Routes, Route } from "react-router-dom";
import { Register } from "./Pages/Register";
import { Login } from "./Pages/Login";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/dashboard" element={<h1>Dashboard</h1>}></Route>
    </Routes>
  );
}

export default App;
