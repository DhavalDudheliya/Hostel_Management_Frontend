import React from "react";
import { UserContext } from "../../../../UserContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

function DueFees() {
  const { user, setUser } = useContext(UserContext);

  if (!user || (user && user.role !== "Accountant")) {
    return <Navigate to="/login" />;
  }

  return <div>DueFees</div>;
}

export default DueFees;
