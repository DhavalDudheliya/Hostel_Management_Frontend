import CollectFeeCard from "@/components/Fees/CollectFeeCard";
import CollectFeeTable from "@/components/Fees/CollectFeeTable";
import React from "react";
import { UserContext } from "../../../../UserContext";

import { useStudentContext } from "../../../../StudentContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

function CollectFees() {
  const { student, setStudent } = useStudentContext();
  const { user, setUser } = useContext(UserContext);

  if (!user || (user && user.role !== "Accountant")) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <div className="p-6 lg:pl-6 lg:pr-10">
        <CollectFeeCard />
        {student && <CollectFeeTable />}
      </div>
    </>
  );
}

export default CollectFees;
