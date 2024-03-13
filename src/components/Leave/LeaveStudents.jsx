import React, { useEffect, useState } from "react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import axios from "axios";

function LeaveStudents() {
  const [leaves, setLeaves] = useState([]);

  const fetchData = async () => {
    try {
      await axios.get("/leave/findStudentsOnLeave").then((res) => {
        if (res.status === 200) {
          setLeaves(res.data.leaveApplications);
          console.log(res.data.leaveApplications);
        }
      });
    } catch (error) {
      if (error.response.status === 404) {
        toast({
          variant: "destructive",
          title: "No Students on Leave !!!",
        });
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="mt-6">
      {leaves && leaves.length !== 0 ? (
        <>
          <Table>
            <TableCaption>A list of all on leave students</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Index</TableHead>
                <TableHead className="text-center">Roll No</TableHead>
                <TableHead className="text-center">Name</TableHead>
                <TableHead className="text-center">Room No</TableHead>
                <TableHead className="text-center">From</TableHead>
                <TableHead className="text-center">To</TableHead>
                <TableHead className="text-center">Reason</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {leaves.map((leave, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{index + 1}</TableCell>
                  <TableCell className="text-center">
                    {leave.student.rollNumber}
                  </TableCell>
                  <TableCell className="text-center">
                    {leave.student.firstName} {leave.student.lastName}
                  </TableCell>
                  <TableCell className="text-center">
                    {leave.student.roomNumber}
                  </TableCell>
                  <TableCell className="text-center">
                    {leave.startDate}
                  </TableCell>
                  <TableCell className="text-center">{leave.endDate}</TableCell>
                  <TableCell className="text-center">{leave.reason}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </>
      ) : (
        <>
          <div className="text-center text-xl mt-10">
            No students are on leave
          </div>
        </>
      )}
    </div>
  );
}

export default LeaveStudents;
