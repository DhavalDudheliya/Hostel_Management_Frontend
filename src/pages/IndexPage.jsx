import React, { useContext, useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../../UserContext";
import Loader from "../components/Loader";

import index from "../assets/Index.jpg";
import Header from "../components/Header";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function IndexPage() {
  const { user, setUser } = useContext(UserContext);

  if (user) {
    if (user.role == "Student") {
      // console.log(user);
      return <Navigate to="/student/dashboard" />;
    } else if (user.role == "Manager") {
      return <Navigate to="/manager/dashboard" />;
    } else if (user.role == "Accountant") {
      return <Navigate to="/accountant/dashboard" />;
    } else if (user.role == "Admin") {
      return <Navigate to="/admin/dashboard" />;
    }
  }

  return (
    <>
      <div className="workspace">
        <div className="max-h-screen overflow-hidden">
          <Header />
        </div>
      </div >
      {/* <img src={index} alt="index" className="" /> */}
    </>
  );
}

export default IndexPage;
