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
          {/* <div className="   top-0 left-0 w-full h-full bg-black opacity-50"></div> */}
        </div>
      </div >
      {/* <img src={index} alt="index" className="" /> */}
      <Carousel className="w-full max-w-xs m-10" >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
}

export default IndexPage;
