import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ allowedRoles }) => {
  const { token, selectedRole } = useSelector((state) => state.auth);

  if (!token) {
    // Not logged in
    return <Navigate to="/Login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(selectedRole)) {
    // Logged in but not the right role
    return <Navigate to="/" replace />;
  }

  // Authorized
  return <Outlet />;
};

export default ProtectedRoute;
