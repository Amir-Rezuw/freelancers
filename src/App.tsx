import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toast";
import { environment } from "./Environment/env";
import AdminLayout from "./Features/Admin/AdminLayout";
import AuthLayout from "./Features/Authentication/Layout/Auth.leyout";
import FreelancerDashboardLayout from "./Features/Freelancer/FreelancerLayout";
import OwnerLayout from "./Features/Owner/OwnerLayout";
import Guarded from "./Features/Shared/UI/Guarded";
import AccessDenied from "./Pages/AccessDenied";
import AdminDashboard from "./Pages/Admin/Dashboard";
import AdminProjects from "./Pages/Admin/Projects";
import AdminProposals from "./Pages/Admin/Proposals";
import AdminUsers from "./Pages/Admin/Users";
import CheckOtp from "./Pages/Auth/CheckOtp";
import SendOtp from "./Pages/Auth/SendOtp";
import CompleteProfile from "./Pages/CompleteProfile";
import FreelancerDashboard from "./Pages/Freelancer/Dashboard";
import Proposals from "./Pages/Freelancer/Proposals";
import SubmittedProjects from "./Pages/Freelancer/SubmittedProjects";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import Owner from "./Pages/Owner/Dashboard";
import Projects from "./Pages/Owner/Projects";
import SingleProject from "./Pages/Owner/SingleProject";
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false}/>
      <ToastContainer delay={environment.toastDelay} position="top-right" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<SendOtp />} />
          <Route path="check-otp" element={<CheckOtp />} />
          <Route path="complete-profile" element={<CompleteProfile />} />
        </Route>
        <Route path="/owner" element={<Guarded> <OwnerLayout /> </Guarded>}>
          <Route index element={<Navigate to={"dashboard"} replace />} />
          <Route path="dashboard" element={<Owner />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:projectId" element={<SingleProject />} />
        </Route>
        <Route path="/freelancer" element={<Guarded> <FreelancerDashboardLayout /> </Guarded>}>
          <Route index element={<Navigate to={"dashboard"} replace />} />
          <Route path="dashboard" element={<FreelancerDashboard />} />
          <Route path="proposals" element={<Proposals />} />
          <Route path="projects" element={<SubmittedProjects /> } />
        </Route>
        <Route path="/admin" element={<Guarded> <AdminLayout /> </Guarded>}>
          <Route index element={<Navigate to={"dashboard"} replace />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="users" element={<AdminUsers />} />
          <Route path="projects" element={<AdminProjects />} />
          <Route path="proposals" element={<AdminProposals />} />
        </Route>
        <Route path="/access-denied" element={<AccessDenied />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </QueryClientProvider> 
  );
}

export default App;
