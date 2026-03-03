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
import AddPropertyBasic from "../pages/AddPropertyBasic";
import AddPropertyMedia from "../pages/AddPropertyMedia";
import AddPropertyPricing from "../pages/AddPropertyPricing";
import AddPropertyReview from "../pages/AddPropertyReview";
import AddPropertySuccess from "../pages/AddPropertySuccess";

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
      <Route path="/AddPropertyBasic" element={<AddPropertyBasic />} />
      <Route path="/AddPropertyMedia" element={<AddPropertyMedia />} />
      <Route path="/AddPropertyPricing" element={<AddPropertyPricing />} />
      <Route path="/AddPropertyReview" element={<AddPropertyReview />} />
      <Route path="/AddPropertySuccess" element={<AddPropertySuccess />} />
      <Route path="/ForgotPassword" element={<ForgotPassword />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/" element={<LandingPage />} />
    </Routes>
  );
};

export default AppRoutes;
