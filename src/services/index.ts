import axios, { AxiosInstance } from "axios";
import { base_PUBLIC_API } from "./config";

const mainAPI: AxiosInstance = axios.create({
  baseURL: base_PUBLIC_API,
});

export default mainAPI;
