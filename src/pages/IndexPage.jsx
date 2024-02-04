import React, { useContext, useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../../UserContext";
import Loader from "../components/Loader";

import index from "../assets/Index.jpg";
import Header from "../components/Header";

function IndexPage() {
  const { user, setUser } = useContext(UserContext);

  if (user) {
    if (user.role == "Student") {
      console.log(user);
      return <Navigate to="/student/dashboard" />;
    } else if (user.role == "Rector") {
      return <Navigate to="/rector/dashboard" />;
    } else if (user.role == "Accountant") {
      return <Navigate to="/accountant/dashboard" />;
    }
  }

  return (
    <>
      <div className="workspace">
        <div className="max-h-screen overflow-hidden">
          <Header />
          {/* <div className="   top-0 left-0 w-full h-full bg-black opacity-50"></div> */}
        </div>
      </div>
      <img src={index} alt="index" className="" />
    </>
  );
}

export default IndexPage;
