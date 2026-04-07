import axios from "axios";

const API = axios.create({
  baseURL: "https://portfolio-backend-cpny.onrender.com/"
});

export default API;