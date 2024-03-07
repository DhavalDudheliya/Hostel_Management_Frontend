import React, { useContext, useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../../UserContext";
import { motion, useScroll } from "framer-motion";

import Header from "../components/Header";
import Hero from "@/components/LandingPage/Hero";
import Header1 from "@/components/LandingPage/Header";
import AboutUs from "@/components/LandingPage/AboutUs";
import PhotoGallery from "@/components/LandingPage/PhotoGallery";
import Testimonials from "@/components/LandingPage/Testimonials";
import Room from "@/components/LandingPage/Room";
import FacilitiesAndAmenities from "@/components/LandingPage/FacilitiesAndAmenities";

function IndexPage() {
  const { user, setUser } = useContext(UserContext);
  const { scrollYProgress } = useScroll();
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      const threshold = 60;

      setIsSticky(offset > threshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
      <div className="landing_background">
        <motion.div
          className="progress-bar bg-rose-500"
          style={{
            // position: isSticky ? "fixed" : "relative",
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            width: "100%",
            height: "5px",
            transformOrigin: "0%",
            scaleX: scrollYProgress,
          }}
        ></motion.div>
      </div>
      <div className="landing_background">
        <Header />
        {/* <Header1 /> */}
        <div className="px-5 md:px-10 lg:px-20">
          <Hero />
          <AboutUs />
          <PhotoGallery />
          <Testimonials />
          <Room />
          <FacilitiesAndAmenities />
        </div>
      </div>
    </>
  );
}

export default IndexPage;
