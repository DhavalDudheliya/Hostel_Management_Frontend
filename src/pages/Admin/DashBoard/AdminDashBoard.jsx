import React from "react";
import { useContext } from "react";
import { UserContext } from "../../../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import StackedBarChart from "./StackedBarChart";
import PieChart from "./VacancyPieChart";
import LeavePieChart from "./LeavePieChart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3dCard";

function AdminDashBoard() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  if (!user || (user && user.role !== "Admin")) {
    navigate("/login");
  }

  return (
    <div className="gap-x-8 p-6 lg:p-8">
      <Card className="w-fit">
        <CardHeader>
          <CardTitle>Quick Counts</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="pr-6 pt-5 flex flex-row flex-wrap gap-x-8 items-center justify-center">
            <div className="">
              <StackedBarChart />
              <p className="text-center mt-4 font-medium ml-10">
                Block Vacancy Graph
              </p>
            </div>
            <div className="">
              <PieChart />
              <p className="text-center mt-4 font-medium">
                Total Vacancy Chart
              </p>
            </div>
            <div>
              <LeavePieChart />
              <p className="text-center mt-4 font-medium">On-Off Leave Chart</p>
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="bg-gray-50 mt-4">
       
      </div>
    </div>
  );
}

export default AdminDashBoard;
