import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toast";

import "./App.css";

import { environment } from "./Environment/env";
import AppLayout from "./Features/Shared/UI/AppLayout";
import Auth from "./Pages/Auth";
import CompleteProfile from "./Pages/CompleteProfile";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import Owner from "./Pages/Owner";
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer
        delay={environment.toastDelay}
        position="top-right"
      />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/auth"
          element={<Auth />}
        />
        <Route
          path="/complete-profile"
          element={<CompleteProfile />}
        />

        <Route element={<AppLayout />}>
          <Route
            path="/owner"
            element={<Owner />}
          />
        </Route>
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
