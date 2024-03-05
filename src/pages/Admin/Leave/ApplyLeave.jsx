import RollNumberInput from "@/components/RollNumberInput";
import React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function ApplyLeave() {
  return (
    <>
      <div className="p-6 lg:pl-6 lg:pr-10">
        <Tabs defaultValue="account" className="w-full">
          <div className="flex items-center py-2">
            <h1 className="text-xl font-bold">ApplyLeave</h1>
            <TabsList className="ml-auto">
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="account">
            Make changes to your account here.
          </TabsContent>
          <TabsContent value="password">Change your password here.</TabsContent>
        </Tabs>
        <div>
          <RollNumberInput />
        </div>
      </div>
    </>
  );
}

export default ApplyLeave;
