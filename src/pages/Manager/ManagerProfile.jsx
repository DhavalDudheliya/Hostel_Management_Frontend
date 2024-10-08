import { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";
import axios from "axios";
import { Navigate } from "react-router-dom";
import ProfilePhoto from "../../components/ProfilePhoto";
import ProfileUpadePopUp from "../../components/ProfileUpdatePopUp";

function ManagerProfile() {
  const { user, setUser } = useContext(UserContext);

  if (!user || (user && user.role !== "Manager")) {
    return <Navigate to="/login" />;
  }

  /*LOGOUT */
  async function logoutHandel(ev) {
    ev.preventDefault();
    await axios.post("/logout");
    setUser(null);
  }

  return (
    <>
      <div className="flex justify-center items-center give_height ">
        <div className="bg-gray-100 inline-flex p-7 rounded-lg  shadow-md shadow-indigo-500/50   m-auto w-fit flex-col gap-2 justify-center items-center">
          <ProfilePhoto />
          <div>{user.name}</div>
          <div>{user.email}</div>
          <div>{user.phone}</div>
          <ProfileUpadePopUp />
          <button className="btn" onClick={logoutHandel}>
            Logout
          </button>
        </div>
      </div>
    </>
  );
}

export default ManagerProfile;
