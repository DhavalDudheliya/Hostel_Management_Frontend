import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import logo from "../../assets/logo2.png";
import report from "../../assets/report.png";
import selected_report from "../../assets/selected_report.png";
import fine from "../../assets/fine.png";
import selected_fine from "../../assets/selected_fine.png";
import notice from "../../assets/bell-plus.png";
import selected_notice from "../../assets/bell-plus_selected.png";
import home from "../../assets/home.png";
import selected_home from "../../assets/selected_home.png";
import addStudent from "../../assets/user-plus.png";
import selected_addStudent from "../../assets/user-plus_selected.png";
import logout from "../../assets/logout.png";
import selected_fees from "../../assets/selected_fees.png";
import fees from "../../assets/fees.png";
import down from "../../assets/down.png";
import selected_down from "../../assets/selected_down.png";
import { UserContext } from "../../../UserContext";
import ModeToggele from "../Mode_toggle";

const AdminSideBar = () => {
  const [open, setOpen] = useState(false);
  const { user, setUser } = useContext(UserContext);
  const [selectedItem, setSelectedItem] = useState("home");
  const [subFeeSelectedItem, setSubFeeSelectedItem] = useState("");

  /* LOGOUT */
  async function logoutHandle(ev) {
    ev.preventDefault();
    await axios.post("/logout");
    setUser(null);
  }

  return (
    <div className="sticky top-0 h-screen">
      <div
        className={`w-60 duration-300 h-screen p-5 pt-8 bg-bg_dark_section relative`}
      >
        <div className="flex gap-x-3 items-center ml-1">
          <img
            className={`h-7 border-2 border-bg_white bg-bg_white rounded-2xl duration-500 `}
            src={logo}
            alt=""
          />
          <h1
            className={`text-lg cursor-pointer font-semibold text-bg_white_font duration-300 origin-left hover:text-[#D90368]`}
          >
            APC&nbsp;Nadiad
          </h1>
        </div>
        <ul className="pt-10">
          <Link
            to="/accountant/dashboard"
            onClick={() => {
              setSelectedItem("home");
              setSubFeeSelectedItem("");
            }}
            className={`text-bg_white text-sm flex items-center gap-x-4 cursor-pointer mb-3 p-2 rounded-md ${
              selectedItem === "home"
                ? "bg-white "
                : "hover:bg-white hover:bg-opacity-20 transition-all duration-75"
            }`}
          >
            {selectedItem === "home" ? (
              <img className={`h-6`} src={selected_home} />
            ) : (
              <img className="h-6" src={home} />
            )}
            <span
              className={`origin-left duration-75 ${
                selectedItem === "home"
                  ? "text-bg_dark_section font-semibold"
                  : "text-bg_white"
              }`}
            >
              Dashboard
            </span>
          </Link>
          <Link
            to={"/admin/add-student"}
            onClick={() => {
              setSelectedItem("addStudent");
              setSubFeeSelectedItem("");
            }}
            className={`text-bg_white text-sm flex items-center gap-x-4 cursor-pointer mb-3 p-2 rounded-md ${
              selectedItem === "addStudent"
                ? "bg-white "
                : "hover:bg-white hover:bg-opacity-20 transition-all duration-75"
            }`}
          >
            {selectedItem === "addStudent" ? (
              <img className={`h-6`} src={selected_addStudent} />
            ) : (
              <img className="h-6" src={addStudent} />
            )}
            <span
              className={`origin-left duration-75 ${
                selectedItem === "addStudent"
                  ? "text-bg_dark_section font-semibold"
                  : "text-bg_white"
              }`}
            >
              Add&nbsp;Student
            </span>
          </Link>
          <li
            onClick={() => {
              setSelectedItem("fees");
              setOpen((prev) => !prev);
            }}
            className={`text-bg_white text-sm flex items-center gap-x-4 cursor-pointer mb-3 p-2 rounded-md ${
              selectedItem === "fees"
                ? "bg-white "
                : "hover:bg-white hover:bg-opacity-20 transition-all duration-75"
            }`}
          >
            {selectedItem === "fees" ? (
              <img className={`h-6 `} src={selected_fees} />
            ) : (
              <img className="h-6" src={fees} />
            )}
            <span
              className={` origin-left duration-75 ${
                selectedItem === "fees"
                  ? "text-bg_dark_section font-semibold"
                  : "text-bg_white"
              }`}
            >
              Fee
            </span>
            {selectedItem === "fees" ? (
              <img className={`h-6 ml-20`} src={selected_down} />
            ) : (
              <img className="h-6 ml-20" src={down} />
            )}
          </li>
          <div
            className={`text-white text-sm ml-10 mb-3 ${
              open ? "block" : "hidden"
            }`}
          >
            <ul className="flex flex-col gap-4">
              <Link
                onClick={() => {
                  setSelectedItem("fees");
                  setSubFeeSelectedItem("collectFee");
                }}
                to="accountant/fee/collectFees"
                className={`p-2 duration-300 hover:underline hover:cursor-pointer ${
                  subFeeSelectedItem === "collectFee"
                    ? "text-[#D90368]"
                    : "text-white"
                }`}
              >
                Collect Fees
              </Link>
              <Link
                onClick={() => {
                  setSelectedItem("fees");
                  setSubFeeSelectedItem("dueFees");
                }}
                to="accountant/fee/dueFees"
                className={`p-2 duration-300 hover:underline hover:cursor-pointer ${
                  subFeeSelectedItem === "dueFees"
                    ? "text-[#D90368]"
                    : "text-white"
                }`}
              >
                Due Fees
              </Link>
              <Link
                onClick={() => {
                  setSelectedItem("fees");
                  setSubFeeSelectedItem("addFee");
                }}
                to="accountant/fee/addFee"
                className={`p-2 duration-300 hover:underline hover:cursor-pointer ${
                  subFeeSelectedItem === "addFee"
                    ? "text-[#D90368]"
                    : "text-white"
                }`}
              >
                Add Fee
              </Link>
            </ul>
          </div>
          <Link
            to={"/admin/report"}
            onClick={() => {
              setSelectedItem("report");
              setSubFeeSelectedItem("");
            }}
            className={`text-bg_white text-sm flex items-center gap-x-4 cursor-pointer mb-3 p-2 rounded-md ${
              selectedItem === "report"
                ? "bg-white "
                : "hover:bg-white hover:bg-opacity-20 transition-all duration-75"
            }`}
          >
            {selectedItem === "report" ? (
              <img className={`h-6`} src={selected_report} />
            ) : (
              <img className="h-6" src={report} />
            )}
            <span
              className={` origin-left duration-75 ${
                selectedItem === "report"
                  ? "text-bg_dark_section font-semibold"
                  : "text-bg_white"
              }`}
            >
              Report
            </span>
          </Link>
          <Link
            to={"/admin/allnotices"}
            onClick={() => {
              setSelectedItem("notice");
              setSubFeeSelectedItem("");
            }}
            className={`text-bg_white text-sm flex items-center gap-x-4 cursor-pointer mb-3 p-2 rounded-md ${
              selectedItem === "notice"
                ? "bg-white duration-200"
                : "hover:bg-white hover:bg-opacity-20 transition-all duration-75"
            }`}
          >
            {selectedItem === "notice" ? (
              <img className={`h-6`} src={selected_notice} />
            ) : (
              <img className="h-6" src={notice} />
            )}
            <span
              className={` origin-left duration-75 ${
                selectedItem === "notice"
                  ? "text-bg_dark_section font-semibold"
                  : "text-bg_white"
              }`}
            >
              Notice
            </span>
          </Link>
          <li
            onClick={logoutHandle}
            className="text-white text-sm flex items-center gap-x-4 cursor-pointer mb-3 p-2 hover:bg-white hover:bg-opacity-20 transition-all duration-75 rounded-md"
          >
            <img className="h-6" src={logout} />
            <span className={` origin-left duration-500`}>Log&nbsp;out</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminSideBar;
