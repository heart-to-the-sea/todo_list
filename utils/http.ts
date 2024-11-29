import axios from "axios";
const baseURL = "/";
const app = axios.create({
  baseURL,
});

export default app;
