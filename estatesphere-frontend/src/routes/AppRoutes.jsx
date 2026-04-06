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
import UserManagement from "../pages/UserManagement";
import ComplaintsManagement from "../pages/ComplaintsManagement";
import ComplaintDetail from "../pages/ComplaintDetail";
import Messages from "../pages/Messages";
import AddProperty from "../pages/AddProperty";
import Properties from "../pages/Properties";
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/Client" element={<ClientDashboard />} />
      <Route path="/Dealer" element={<DealerDashboard />} />
      <Route path="/Resident" element={<ResidentDashboard />} />
      <Route path="/SocietyOwner" element={<SocietyOwnerDashboard />} />
      <Route path="/SuperAdmin" element={<SuperAdminDashboard />} />
      <Route path="/UserManagement" element={<UserManagement />} />
      <Route path="/ComplaintsManagement" element={<ComplaintsManagement />} />
      <Route path="/ComplaintDetail" element={<ComplaintDetail />} />
      <Route path="/Messages" element={<Messages />} />
      <Route path="/ForgotPassword" element={<ForgotPassword />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />
      <Route element={<ProtectedRoute allowedRoles={["Dealer", "SocietyOwner"]} />}>
      <Route path="/add-property" element={<AddProperty />} />
      </Route>
      <Route path="/Properties" element={<Properties />} />
      <Route path="/" element={<LandingPage />} />
    </Routes>
  );
};

export default AppRoutes;
