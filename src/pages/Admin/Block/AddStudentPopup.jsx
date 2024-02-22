import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

// Components
import Loader from "../../../components/Loader";
import { Input } from "@/components/ui/input";
import { UserContext } from "../../../../UserContext";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

function AddStudentPopup({
  blockId,
  roomNo,
  AllocatedRoomStudents,
  capacity,
  setFetch,
  setAllocatedRoomStudents,
}) {
  const { toast } = useToast();
  const [rollNo, setRollNo] = useState("");
  const { user, setUser } = useContext(UserContext);
  const [loading, setLoading] = useState(false);

  if (!user || (user && user.role !== "Admin")) {
    return <Navigate to="/login" />;
  }

  async function addStudent(ev) {
    ev.preventDefault();
    setLoading(true);
    axios
      .post("/admin/allocate-student/" + blockId, {
        rollNo,
        roomNumber: roomNo,
      })
      .then((res) => {
        if (res.status === 200) {
          setLoading(false);
          toast({
            title: "Student allocated successfully.",
          });
          setRollNo("");
          setAllocatedRoomStudents(res.data.roomInfo.allocatedStudents);
          setFetch(true);
        }
      });
  }

  return (
    <>
      {AllocatedRoomStudents.length < capacity && (
        <div>
          <Dialog>
            <DialogTrigger asChild>
              <div
                className="flex justify-center text-2xl items-center border border-gray-400/50 rounded-lg h-[104px] cursor-pointer shadow hover:bg-gradient-to-t hover:from-gray-200 hover:to-gray-100 "
              >
                {loading && <Loader height={"200px"} />}
                {!loading && "+"}
              </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add Student</DialogTitle>
              </DialogHeader>
              <form onSubmit={addStudent}>
                <Label htmlFor="name" className="text-right">
                  Student Roll Number
                </Label>
                <Input
                  required
                  type="number"
                  value={rollNo}
                  className="mt-1 mb-2"
                  onChange={(ev) => {
                    setRollNo(ev.target.value);
                  }}
                  name="rollNo"
                  placeholder="Enter Student Roll number"
                />
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="secondary">Close</Button>
                  </DialogClose>
                  <DialogClose asChild>
                    <Button type="submit" className="hover:bg-red-500">
                      Add
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      )}
    </>
  );
}

export default AddStudentPopup;
