import React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import StudentProfile from "./StudentProfile";

function FullInfoCard() {
  return (
    <div className="bg-white border-2 w-full p-4">
      <Tabs defaultValue="profile" className="w-full">
        <TabsList
          className={cn(
            "ml-auto justify-start bg-transparent border-b h-auto pb-0 pl-0 pt-0"
          )}
        >
          <TabsTrigger
            className={cn(
              "data-[state=active]:bg-transparent data-[state=active]:border-b-4 data-[state=active]:rounded-none data-[state=active]:border-cyan-500 text-bg_dark_section transition-none px-6 pb-2 text-base"
            )}
            value="profile"
          >
            Profile
          </TabsTrigger>
          <TabsTrigger
            className={cn(
              "data-[state=active]:bg-transparent data-[state=active]:border-b-4 data-[state=active]:rounded-none data-[state=active]:border-cyan-500 text-bg_dark_section transition-none px-6 pb-2 text-base"
            )}
            value="attendence"
          >
            Attendence
          </TabsTrigger>
          <TabsTrigger
            className={cn(
              "data-[state=active]:bg-transparent data-[state=active]:border-b-4 data-[state=active]:rounded-none data-[state=active]:border-cyan-500 text-bg_dark_section transition-none px-6 pb-2 text-base"
            )}
            value="noc"
          >
            NOC
          </TabsTrigger>
        </TabsList>
        <div className="py-4">
          <TabsContent value="profile">
            <StudentProfile />
          </TabsContent>
          <TabsContent value="attendence"></TabsContent>
          <TabsContent value="noc"></TabsContent>
        </div>
      </Tabs>
    </div>
  );
}

export default FullInfoCard;
