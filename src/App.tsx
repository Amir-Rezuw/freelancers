import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toast";
import "./App.css";
import { environment } from "./Environment/env";
import AuthLayout from "./Features/Authentication/Layout/Auth.leyout";
import OwnerLayout from "./Features/Owner/OwnerLayout";
import CheckOtp from "./Pages/Auth/CheckOtp";
import SendOtp from "./Pages/Auth/SendOtp";
import CompleteProfile from "./Pages/CompleteProfile";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import Owner from "./Pages/Owner/Dashboard";
import Projects from "./Pages/Owner/Projects";
import SingleProject from "./Pages/Owner/SingleProject";
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer
        delay={environment.toastDelay}
        position="top-right"
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<SendOtp />} />
          <Route path="check-otp" element={<CheckOtp />} />
        </Route>
        <Route path="/complete-profile" element={<CompleteProfile />} />
        <Route path="/owner" element={<OwnerLayout />}>
          <Route index element={<Navigate to={"dashboard"} replace />} />
          <Route path="dashboard" element={<Owner />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:projectId" element={<SingleProject />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </QueryClientProvider> 
  );
}

export default App;
