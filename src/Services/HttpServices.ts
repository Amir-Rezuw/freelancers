import axios from "axios";
import { environment } from "../Environment/env";
const app = axios.create({
  baseURL: environment.baseUrl,
  withCredentials: true,
});

const http = {
  get: app.get,
  post: app.post,
  delete: app.delete,
  put: app.put,
  patch: app.patch,
};

export default http;
