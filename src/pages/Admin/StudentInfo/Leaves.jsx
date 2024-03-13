import React from "react";
import { useStudentContext } from "../../../../StudentContext";

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

function Leaves() {
  const { student } = useStudentContext();

  return (
    <div>
      {student.leaves && student.leaves.length !== 0 ? (
        <>
          <Table className={cn("rounded-none")}>
            <TableCaption>
              A list of all leaves of {student.firstName} {student.lastName}
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Index</TableHead>
                <TableHead className="text-center">From</TableHead>
                <TableHead className="text-center">To</TableHead>
                <TableHead className="text-center">Reason</TableHead>
                <TableHead className="text-center">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {student.leaves.map((leave, index) => (
                <TableRow key={index}>
                  <TableCell className={cn("bg-white")}>{index + 1}</TableCell>

                  <TableCell className={cn("bg-white text-center")}>
                    {leave.startDate}
                  </TableCell>
                  <TableCell className={cn("bg-white text-center")}>
                    {leave.endDate}
                  </TableCell>
                  <TableCell className={cn("bg-white text-center")}>
                    {leave.reason}
                  </TableCell>
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

export default Leaves;
