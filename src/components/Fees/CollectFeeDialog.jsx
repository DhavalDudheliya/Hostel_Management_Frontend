import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IndianRupee, Send } from "lucide-react";
import { toast } from "react-toastify";
import axios from "axios";
import { useStudentContext } from "../../../StudentContext";

function CollectFeeDialog({ fee }) {
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState("");
  const { student, setStudent, setSubFees } = useStudentContext();
  async function addFee(ev) {
    ev.preventDefault();

    try {
      await axios
        .post("/accountant/collectFee", {
          studentId: student._id,
          feeId: fee._id,
          amount,
          date,
        })
        .then((res) => {
          if (res.status === 200) {
            console.log("Updated: ", res.data.updatedStudent);
            setStudent(res.data.updatedStudent);
            setSubFees(res.data.feeObject.paidAmount);
            toast.success("Payment updated successfully");
          } else if (res.status === 400) {
            toast.error("Please add amount less than balance amount");
          }
        });
    } catch (error) {
      if (error.response.status === 400) toast.error("Submit Failed");
    }
  }

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <button
            size="sm"
            className="bg-blue-500 cursor-pointer text-white text-xs h-8 rounded-md px-2 hover:bg-blue-500/90 flex items-center"
          >
            <IndianRupee size={14} />
            <div>Collect fees</div>
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>
              <span>Fee Details </span>
              <span className="text-base text-red-500 font-normal">
                ( {fee.year}-{fee.semester} )
              </span>
            </DialogTitle>
            <DialogDescription>
              Add amount and date of payment
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={addFee}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Amount
                </Label>
                <Input
                  required
                  id="amount"
                  type="number"
                  className="col-span-3"
                  onChange={(ev) => setAmount(ev.target.value)}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Date
                </Label>
                <Input
                  required
                  className="w-[278px]"
                  type="date"
                  max={new Date().toISOString().split("T")[0]}
                  onChange={(ev) => setDate(ev.target.value)}
                  placeholder="Select date"
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" className="hover:bg-red-500">
                <Send size={18} className="mr-2" />
                Submit
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default CollectFeeDialog;
