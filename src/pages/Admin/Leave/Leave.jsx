import React, { useContext } from "react";
import { UserContext } from "../../../../UserContext";
import { useNavigate } from "react-router-dom";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PersonalLeaveCard from "@/components/Leave/PersonalLeaveCard";
import BulkLeaveCard from "@/components/Leave/BulkLeaveCard";
import LeaveStudents from "@/components/Leave/LeaveStudents";
import LeaveLog from "@/components/Leave/LeaveLog";
import { Separator } from "@/components/ui/separator";

function Leave() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  if (!user || (user && user.role !== "Admin")) {
    navigate("/login");
  }
  return (
    <>
      <div className="p-6 lg:p-8">
        <Tabs defaultValue="personal" className="w-full">
          <TabsList className="ml-auto">
            <TabsTrigger value="personal">Personal Leave</TabsTrigger>
            <Separator orientation="vertical" />
            <TabsTrigger value="bulk">Bulk Leave</TabsTrigger>
            <Separator orientation="vertical" />
            <TabsTrigger value="student">On Leave Students</TabsTrigger>
            <Separator orientation="vertical" />
            <TabsTrigger value="log">Leave Log</TabsTrigger>
            <div className="text-bg_dark_font opacity-0">22</div>
          </TabsList>

          <TabsContent value="personal">
            <PersonalLeaveCard />
          </TabsContent>
          <TabsContent value="bulk">
            <BulkLeaveCard />
          </TabsContent>
          <TabsContent value="student">
            <LeaveStudents />
          </TabsContent>
          <TabsContent value="log">
            <LeaveLog />
          </TabsContent>
        </Tabs>
        {/* <div>
          <RollNumberInput />
        </div> */}
      </div>
    </>
  );
}

export default Leave;
