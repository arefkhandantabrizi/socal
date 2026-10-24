import axios, { AxiosInstance } from "axios";
import { base_PUBLIC_API, base_API } from "./config";

const mainAPI: AxiosInstance = axios.create({
  baseURL: base_PUBLIC_API ?? base_API,
  withCredentials: true,
});

export default mainAPI;
