import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../../contexts/UserContext";

function ManagerDashboard() {
  const { user } = useContext(UserContext);

  if (!user || (user && user.role !== "Manager")) {
    return <Navigate to="/login" />;
  }

  return <div>ManagerDashboard</div>;
}

export default ManagerDashboard;
