import React from "react";
import { UserContext } from "../../../../UserContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import DueFeeCard from "@/components/Fees/DueFeeCard";
import DueFeeTable from "@/components/Fees/DueFeeTable";

function DueFees() {
  const { user, setUser } = useContext(UserContext);

  if (!user || (user && user.role !== "Accountant")) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="p-6 lg:pl-6 lg:pr-10">
      <DueFeeCard />
      <DueFeeTable />
    </div>
  );
}

export default DueFees;
