import CollectFeeCard from "@/components/Fees/CollectFeeCard";
import CollectFeeTable from "@/components/Fees/CollectFeeTable";
import { UserContext } from "../../../../contexts/UserContext";

import { useStudentContext } from "../../../../contexts/StudentContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

function CollectFees() {
  const { student } = useStudentContext();
  const { user } = useContext(UserContext);

  if (!user || (user && user.role !== "Accountant")) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <div className="container py-8">
        <CollectFeeCard />
        {student && <CollectFeeTable />}
      </div>
    </>
  );
}

export default CollectFees;
