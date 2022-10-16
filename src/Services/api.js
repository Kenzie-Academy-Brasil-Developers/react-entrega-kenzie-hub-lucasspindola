import axios from "axios";

export const apiBaseKenzieHub = axios.create({
  baseURL: "https://kenziehub.herokuapp.com",
  timeout: 15000,
});
