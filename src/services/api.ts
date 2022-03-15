import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.100.104:7777",
});

export default api;
