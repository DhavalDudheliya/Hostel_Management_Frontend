import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { FaceIcon } from "@radix-ui/react-icons";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-8 mt-16 text-center footer_shadow">
      <div className="container mx-auto">
        {/* <p>&copy; 2024 Your Website Name. All Rights Reserved.</p>
        <p>Address: Nutan Park Society, Nadiad, Gujarat 387001</p>
        <p>Email: info@example.com | Phone: +1 (123) 456-7890</p> */}
        <div className="flex flex-row justify-between items-start">
          <div to={"/"} className="flex items-center gap-2 cursor-pointer px-2">
            <img
              className="p-1 h-9 w-10 bg-white rounded-full"
              src={logo}
              alt=""
            />
            <span className="text-xl font-semibold">APC Nadiad</span>
          </div>
          {/* <div className="flex flex-col">
            <p>Address: Nutan Park Society, Nadiad, Gujarat 387001</p>
            <p>Email: apcnadiad13@.com | Phone: +1 (123) 456-7890</p>
          </div> */}
          <div>
            <p className="mb-2">
              &copy; 2024 BAPS Swaminarayan Chhatralaya. All Rights Reserved.
            </p>
            <p>Address: Nutan Park Society, Nadiad, Gujarat 387001</p>
            <p>Email: info@example.com | Phone: +1 (123) 456-7890</p>
          </div>
          <div className="flex flex-row gap-2">
            <Facebook />
            <Instagram />
            <Twitter />
            <Youtube size={25} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
