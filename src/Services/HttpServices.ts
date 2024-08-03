import axios from "axios";

const _BASE_URL = import.meta.env.VITE_BASE_URL;

const app = axios.create({
  baseURL: _BASE_URL,
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
