import { useContext, useState } from "react";
import { UserContext } from "../../../UserContext";
import ManagerMobileHeader from "./ManagerMobileHeader";
import AdminHeader from "./AdminHeader";
import StudentMobileHeader from "./StudentMobileHeader";

function SideBar() {
  const { user } = useContext(UserContext);
  return (
    <>
      {user && user.role === "Manager" && <ManagerMobileHeader />}
      {user && user.role === "Admin" && <AdminHeader />}
      {user && user.role === "Student" && <StudentMobileHeader />}
    </>
  );
}

export default SideBar;
