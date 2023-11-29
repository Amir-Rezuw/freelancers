import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toast";

import "./App.css";

import { environment } from "./Environment/env";
import Auth from "./Pages/Auth";
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer
        delay={environment.toastDelay}
        position="top-right"
      />
      <div className="container xl:max-w-screen-xl">
        <Routes>
          <Route
            path="/auth"
            element={<Auth />}
          />
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;
