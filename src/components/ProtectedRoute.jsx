import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
  const user = useSelector((store) => store.user);
  return user ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
