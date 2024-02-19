import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Undo2 } from "lucide-react";
import axios from "axios";
import { toast } from "react-toastify";
import { useStudentContext } from "../../../StudentContext";

import { useToast } from "@/components/ui/use-toast";

function RevertFeeAlertDialogue({ subFeeAmount, subFeeId, feeId }) {
  const { toast } = useToast();

  const { student, setStudent, setSubFees } = useStudentContext();

  async function handleSubmit(ev, subFeeAmount, subFeeId, feeId) {
    // ev.preventDefault();
    try {
      await axios
        .post("/accountant/revertFee", {
          amount: subFeeAmount,
          subFeeId,
          feeId,
        })
        .then((res) => {
          if (res.status === 200) {
            toast({
              title: "Payment reverted successfully.",
            });
            setStudent(res.data.updatedStudent);
            setSubFees(res.data.fee.paidAmount);
          }
        });
    } catch (error) {
      if (error.response.status === 400) {
        toast({
          variant: "destructive",
          title: "Fee payment reverting failed.",
        });
      }
    }
  }

  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <button
            size="sm"
            className="bg-red-500 cursor-pointer text-white text-xs h-8 rounded-md px-2 hover:bg-red-500/90 flex items-center"
          >
            <Undo2 size={14} />
            <div className="ml-1">Revert</div>
          </button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-red-500">
              Are you absolutely sure to revert?
            </AlertDialogTitle>
            <AlertDialogDescription>
              This action will revert this fee payment
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={(ev) => handleSubmit(ev, subFeeAmount, subFeeId, feeId)}
            >
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

export default RevertFeeAlertDialogue;
