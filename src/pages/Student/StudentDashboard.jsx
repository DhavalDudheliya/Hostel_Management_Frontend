import { React, useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import SideBar from "../../components/Sidebar/SideBar";
import { UserContext } from "../../../contexts/UserContext";

function StudentDashboard() {
  const { user, setUser } = useContext(UserContext);

  if (!user || (user && user.role !== "Student")) {
    return <Navigate to="/login" />;
  }

  return <div>StudentDashboard</div>;
}

export default StudentDashboard;
