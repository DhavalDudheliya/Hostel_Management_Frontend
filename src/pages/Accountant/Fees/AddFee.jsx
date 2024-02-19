import React, { useState } from "react";
import axios from "axios";
import { UserContext } from "../../../../UserContext";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "react-toastify";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

function AddFee() {
  const [amount, setAmount] = useState();
  const [semester, setSemester] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [feesFor, setFeesFor] = useState("");

  const { user, setUser } = useContext(UserContext);

  if (!user || (user && user.role !== "Accountant")) {
    return <Navigate to="/login" />;
  }
  async function handleSubmit(ev) {
    ev.preventDefault();
    try {
      await axios
        .post("/accountant/addNewFee", {
          amount,
          semester,
          dueDate,
          feesFor,
        })
        .then((res) => {
          if (res.status === 200) {
            toast.success("Fee add successfully");
          }
        });
    } catch (error) {
      if (error.response.status === 400) toast.error("Submit failed");
    }
  }

  return (
    <div className="px-6 py-16 lg:pl-6 lg:pr-10">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Add Fee Master</CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-y-6 gap-x-32">
                <div>
                  <Label className="font-medium">Semester</Label>
                  <div className="flex flex-row gap-2 items-center relative">
                    <Select onValueChange={(value) => setSemester(value)}>
                      <SelectTrigger
                        className={`w-full h-8 border-gray-300 mt-1 `}
                      >
                        <SelectValue placeholder="Select semester" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="First Semester">
                            First Semester
                          </SelectItem>
                          <SelectItem value="Second Semester">
                            Second Semester
                          </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <Label className="font-medium">Amount</Label>
                  <div className="flex flex-row gap-2 items-center relative">
                    <Input
                      type="number"
                      name="amount"
                      className={`mt-1 mb-1`}
                      placeholder="Enter amount"
                      onChange={(ev) => {
                        setAmount(ev.target.value);
                      }}
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label className="font-medium">Due Date</Label>
                  <div className="flex flex-row gap-2 items-center relative">
                    <Input
                      required
                      type="date"
                      onChange={(ev) => {
                        setDueDate(ev.target.value);
                      }}
                      min={new Date().toISOString().split("T")[0]}
                    />
                  </div>
                </div>
                <div>
                  <Label className="font-medium">Fees for</Label>
                  <div className="flex flex-row gap-2 items-center relative">
                    <Select
                      onValueChange={(value) => setFeesFor(value)}
                      required="true"
                    >
                      <SelectTrigger
                        className={`w-full h-8 border-gray-300 mt-1 `}
                      >
                        <SelectValue placeholder="Select fee for" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="all">All students</SelectItem>
                          <SelectItem value="new">
                            Only new admissions
                          </SelectItem>
                          {/* <SelectItem value="Second Semester">
                            Personally
                          </SelectItem> */}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              <div className="mt-10 flex justify-center">
                <Button type="submit" size="lg">
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default AddFee;
