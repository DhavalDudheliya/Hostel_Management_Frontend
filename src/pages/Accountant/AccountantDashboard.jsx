import React from "react";
import { UserContext } from "../../../contexts/UserContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

function AccountantDashboard() {
  const { user, setUser } = useContext(UserContext);

  if (!user || (user && user.role !== "Accountant")) {
    return <Navigate to="/login" />;
  }

  return <div>AccountantDashboard</div>;
}

export default AccountantDashboard;
