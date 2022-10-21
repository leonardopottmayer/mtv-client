import axios from "axios";

const pottmayerDevApi = axios.create({
  // baseURL: "http://localhost:7575",
  baseURL: "https://api.pottmayer.dev/",
});

export default pottmayerDevApi;
