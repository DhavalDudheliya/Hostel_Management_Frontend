import React, { useState } from "react";

import axios from "axios";
import { toast } from "react-toastify";
import * as myConstants from "../../../myConstants";
import { useStudentContext } from "../../../StudentContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

import { Home, User } from "lucide-react";

function CollectFeeCard() {
  const { toast } = useToast();

  const [rollNumber, setRollNumber] = useState("");
  const { student, setStudent } = useStudentContext();

  async function getDeatils(ev) {
    ev.preventDefault();
    if (rollNumber === "") {
      if (student) {
        setStudent("");
      } else {
        toast({
          variant: "destructive",
          title: "Please enter roll number please!!!",
        });
      }
    } else {
      try {
        await axios
          .get(`/accountant/getStudentByRollNumber?q=${rollNumber}`)
          .then((res) => {
            if (res.status === 200) {
              setStudent(res.data.student);
              // console.log(student);
            }
          });
      } catch (error) {
        if (error.response.status === 404)
          toast.error("Student doea not exist");
        if (error.response.status === 401) toast.error("Request failed");
        console.log(error);
      }
    }
  }

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Collect Fees</CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            <form onSubmit={(ev) => getDeatils(ev)}>
              <Label className="m-1">Roll Number</Label>
              <div className="flex flex-row gap-2 items-center relative">
                <Input
                  type="number"
                  id="query"
                  name="rollNumber"
                  value={rollNumber}
                  onChange={(ev) => {
                    setRollNumber(ev.target.value);
                  }}
                  className="shadow appearance-none border rounded-lg w-full lg:w-1/2 py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <Button type="submit" variant="default" size="sm">
                  Get Details
                </Button>
              </div>
            </form>
            <div className="w-full lg:w-1/2">
              {student && (
                <div className="bg-slate-100 w-full border rounded-lg mt-2 border-gray-400/50 shadow p-3 flex flex-row gap-4">
                  <div>
                    {student.profilePhoto ? (
                      <img
                        className="rounded-xl aspect-square object-cover border-2 border-bg_dark_section"
                        src={
                          myConstants.BACKEND_URL +
                          "/uploads/" +
                          student.profilePhoto
                        }
                      ></img>
                    ) : (
                      <img
                        className="rounded aspect-square object-cover border border-bg_dark_section/50 w-20"
                        src={myConstants.BACKEND_URL + "/uploads/default.png"}
                      ></img>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <div className="font-medium text-base mb-1">
                      {student.firstName} {student.fatherFirstName}{" "}
                      {student.lastName}
                    </div>
                    <div className="flex flex-row gap-2 mb-1">
                      <Badge
                        variant="primary_2"
                        className="flex flex-row gap-1 items-center"
                      >
                        <User size={14} />
                        <h6 className="">{student.rollNumber}</h6>
                      </Badge>
                      <Badge
                        variant="primary"
                        className="flex flex-row gap-1 items-center"
                      >
                        <Home size={14} />
                        <h6 className="">{student.roomNumber}</h6>
                      </Badge>
                    </div>
                    <div className="flex flex-row gap-2">
                      <Badge variant="primary_2">{student.course}</Badge>
                      <Badge variant="primary">{student.branch}</Badge>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default CollectFeeCard;
