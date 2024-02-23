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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import axios from "axios";
import { useStudentContext } from "../../../StudentContext";
import { useToast } from "@/components/ui/use-toast";
import { Trash2 } from "lucide-react";

function DeleteFee({ fee }) {
  const { student, setStudent } = useStudentContext();
  const { toast } = useToast();

  async function clearPanelty() {
    try {
      axios
        .post("/accountant/deleteFee", {
          studentId: student._id,
          feeId: fee._id,
        })
        .then((res) => {
          if (res.status === 200) {
            setStudent(res.data.updatedStudent);
            toast({
              title: "Fee Deleted successfully !!",
            });
          }
        });
    } catch (error) {
      if (error.response.status === 404) {
        toast({
          variant: "destructive",
          title: "Fee not found.",
        });
      }
      if (error.response.status === 400) {
        toast({
          variant: "destructive",
          title: "Oh! Something went wrong.",
        });
      }
    }
  }

  return (
    <div>
      <AlertDialog>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <AlertDialogTrigger asChild>
                <span className="text-white bg-red-500 p-1 mt-1 rounded-sm hover:ring-2 hover:ring-red-700">
                  <Trash2 size={16} />
                </span>
              </AlertDialogTrigger>
            </TooltipTrigger>
            <TooltipContent>
              <p>Delete Fee</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-red-500">
              Are you absolutely sure to delete The Fee?
            </AlertDialogTitle>
            <AlertDialogDescription>
              This action will delete this fee
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={clearPanelty}>Yes</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

export default DeleteFee;
