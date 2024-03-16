import React from "react";
import { useContext } from "react";
import { UserContext } from "../../../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import StackedBarChart from "./StackedBarChart";

function AdminDashBoard() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  if (!user || (user && user.role !== "Admin")) {
    navigate("/login");
  }

  return (
    <div>
      <StackedBarChart />
    </div>
  );
}

export default AdminDashBoard;
