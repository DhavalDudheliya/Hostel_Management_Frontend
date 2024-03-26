import React from "react";
import { UserContext } from "../../../../contexts/UserContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import Counts from "./Counts";
import FeesLineChart from "./LineChart";

function AccountantDashboard() {
  const { user, setUser } = useContext(UserContext);

  if (!user || (user && user.role !== "Accountant")) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="space-y-8 p-6 lg:px-8">
      <Counts />
      <FeesLineChart />
    </div>
  );
}

export default AccountantDashboard;
