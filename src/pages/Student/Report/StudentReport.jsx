import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../../UserContext";
import Loader from "../../../components/Loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import StudentViewPopUp from "./StudentViewPopUp";
import { Navigate } from "react-router-dom";
import StudentAddReportPopUp from "./StudentAddReportPopUp";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

function StudentReport() {
  const [fetch, setFetch] = useState(false);
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(UserContext);

  useEffect(() => {
    axios.get("report/get-report").then((res) => {
      const sortedReports = res.data.sort((a, b) => {
        return new Date(b.updatedAt) - new Date(a.updatedAt);
      });
      setReports(sortedReports);
      setFetch(false);
      setLoading(false);
    });
  }, [fetch]);

  if (!user || (user && user.role !== "Student")) {
    return <Navigate to="/login" />;
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <ToastContainer />
      <div className="flex justify-center text-2xl font-bold labels mx-4 mt-6">
        All Reports
      </div>
      <StudentAddReportPopUp setFetch={setFetch} />
      <div className="flex flex-col mx-2">
        <div className="grid grid-cols-3 md:grid-cols-9 bg-gray-200 border-x mx-6 cursor-pointe p-1.5 rounded-t-lg">
          <div></div>
          <div className="">Receiver</div>
          <div className="hidden md:block truncate col-span-2 text-center">
            Title
          </div>
          <div className="hidden md:block truncate col-span-3 text-center">
            Description
          </div>
          <div className="text-center md:col-span-2">Date</div>
        </div>
        {reports.length > 0 &&
          reports.map((report) => <StudentViewPopUp report={report} />)}
      </div>
    </>
  );
}

export default StudentReport;
