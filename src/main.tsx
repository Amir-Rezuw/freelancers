import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import AuthCtxProvider from "./Features/Authentication/Context/Auth.ctx.tsx";
import "./index.css";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <AuthCtxProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </AuthCtxProvider>
  </BrowserRouter>
);
