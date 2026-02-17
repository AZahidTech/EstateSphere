import { Routes, Route } from "react-router-dom";
import ClientDashboard from "../dashboards/ClientDashboard";
import DealerDashboard from "../dashboards/DealerDashboard";
import ResidentDashboard from "../dashboards/ResidentDashboard";
import SocietyOwnerDashboard from "../dashboards/SocietyOwnerDashboard";
import SuperAdminDashboard from "../dashboards/SuperAdminDashboard";
import ForgotPassword from "../pages/auth/ForgotPassword";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import LandingPage from "../pages/LandingPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/Client" element={<ClientDashboard />} />
      <Route path="/Dealer" element={<DealerDashboard />} />
      <Route path="/Resident" element={<ResidentDashboard />} />
      <Route path="/SocietyOwner" element={<SocietyOwnerDashboard />} />
      <Route path="/SuperAdmin" element={<SuperAdminDashboard />} />
      <Route path="/ForgotPassword" element={<ForgotPassword />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/" element={<LandingPage />} />


    </Routes>
  );
};

export default AppRoutes;
