import React, { useState } from "react";
import { ReceiptIndianRupee } from "lucide-react";
import moment from "moment";

import { useStudentContext } from "../../../StudentContext";
import CollectFeeDialog from "./CollectFeeDialog";
import { Button } from "@/components/ui/button";
import RevertFeeAlertDialogue from "./RevertFeeAlertDialogue";
import AddPaneltyDialog from "./AddPaneltyDialog";
import ClearPaneltyAler from "./ClearPaneltyAler";

function CollectFeeTable() {
  const [expandedRow, setExpandedRow] = useState(null);
  const { student, setSubFees, subFees } = useStudentContext();

  const handleRowClick = (index, fee) => {
    if (expandedRow === index) {
      // If the same row is clicked again, hide the sub-row
      setExpandedRow(null);
    } else {
      // If a different row is clicked, show the sub-row
      setSubFees(fee.paidAmount);
      setExpandedRow(index);
    }
  };

  // async function clearPanelty() {}

  return (
    <div>
      <div className="relative overflow-x-auto mt-10 rounded-t-2xl border border-gray-300 shadow-sm">
        <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Year
              </th>
              <th scope="col" className="px-6 py-3">
                Semester
              </th>
              <th scope="col" className="px-6 py-3">
                Amount
              </th>
              <th scope="col" className="px-6 py-3">
                Penalty
              </th>
              <th scope="col" className="px-6 py-3">
                Paid
              </th>
              <th scope="col" className="px-6 py-3">
                Paid Date
              </th>
              <th scope="col" className="px-6 py-3">
                Balance
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-12 py-3 text-left">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {student &&
              student.fees.map((fee, index) => (
                <>
                  <tr className="bg-white border-b border-gray-300 dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 cursor-pointer">
                    <td
                      scope="row"
                      className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                      onClick={() => handleRowClick(index, fee)}
                    >
                      {fee.year}
                    </td>
                    <td
                      className="px-6 py-4"
                      onClick={() => handleRowClick(index, fee)}
                    >
                      {fee.semester}
                    </td>
                    <td
                      className="px-6 py-4 font-semibold"
                      onClick={() => handleRowClick(index, fee)}
                    >
                      ₹{fee.amount}
                    </td>
                    <td
                      className="px-6 py-2"
                      // onClick={() => handleRowClick(index, fee)}
                    >
                      <div className="flex flex-row justify-center items-center gap-2">
                        <span className="font-semibold">₹{fee.penalty}</span>
                        <div className="flex flex-col">
                          <AddPaneltyDialog fee={fee} />
                          <ClearPaneltyAler fee={fee} />
                        </div>
                      </div>
                    </td>
                    <td
                      className="px-6 py-4 font-semibold"
                      onClick={() => handleRowClick(index, fee)}
                    >
                      ₹{fee.totalAmountPaid}
                    </td>
                    <td onClick={() => handleRowClick(index, fee)}></td>
                    <td
                      className="px-6 py-4"
                      onClick={() => handleRowClick(index, fee)}
                    >
                      ₹{fee.amount - fee.totalAmountPaid}
                    </td>
                    <td
                      className="uppercase px-6 py-4"
                      onClick={() => handleRowClick(index, fee)}
                    >
                      <button
                        size="sm"
                        className={`font-semibold h-6 rounded-md cursor-pointer ${
                          fee.paymentStatus === "Pending"
                            ? "text-red-500"
                            : fee.paymentStatus === "Partial"
                            ? "text-yellow-500/80"
                            : "text-green-500"
                        }`}
                      >
                        {fee.paymentStatus}
                      </button>
                    </td>
                    <td className="px-6 py-4">
                      <CollectFeeDialog fee={fee} />
                    </td>
                  </tr>
                  {expandedRow === index &&
                    subFees &&
                    subFees.map((subFee, index) => (
                      <tr className="bg-gray-200 border-b border-gray-300">
                        <td className="px-6 py-4"></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>₹{subFee.amount}</td>
                        <td>{moment(subFee.date).format("DD-MM-YYYY")}</td>
                        <td></td>
                        <td></td>
                        <td className="pr-2 py-4 flex flex-row items-center justify-start gap-1">
                          <RevertFeeAlertDialogue
                            subFeeAmount={subFee.amount}
                            subFeeId={subFee._id}
                            feeId={fee._id}
                          />
                          <button
                            size="sm"
                            className="bg-cyan-500 cursor-pointer text-white text-xs h-8 rounded-md px-2 hover:bg-cyan-500/90 flex items-center"
                          >
                            <ReceiptIndianRupee size={14} />
                            <div className="ml-1">Reciept</div>
                          </button>
                        </td>
                      </tr>
                    ))}
                </>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CollectFeeTable;
