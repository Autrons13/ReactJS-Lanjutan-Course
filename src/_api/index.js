import axios from "axios";

const API = axios.create({
  //baseURL: "https://akmal-bc.karyakreasi.id/ ",
  baseURL: "http://127.0.0.1:8000/api",
});

export default API;
