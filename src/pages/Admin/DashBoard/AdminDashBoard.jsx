import React from "react";
import { useContext } from "react";
import { UserContext } from "../../../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import StackedBarChart from "./StackedBarChart";
import PieChart from "./VacancyPieChart";
import LeavePieChart from "./LeavePieChart";
import { Card, CardContent } from "@/components/ui/card";
import LineChart from "./LineChart";
import Counts from "./Counts";

import BirthdayList from "./BirthdayList";

function AdminDashBoard() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  if (!user || (user && user.role !== "Admin")) {
    navigate("/login");
  }

  return (
    <div className="gap-x-8 p-6 lg:p-8">
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 w-full">
        <section className="md:col-span-2">
          <Card className="w-full login_bg border-none">
            <CardContent>
              <div className="pr-6  flex flex-row flex-wrap gap-x-8 items-center justify-center lg:justify-evenly">
                <div className="">
                  <PieChart />
                  <p className="text-center mt-4 font-medium">
                    Total Vacancy Chart
                  </p>
                </div>
                <div>
                  <LeavePieChart />
                  <p className="text-center mt-4 font-medium">
                    On-Off Leave Chart
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
        <section>
          <Counts />
        </section>
        <section>
          <Card className="w-full login_bg border-none flex justify-center">
            <CardContent>
              <div className="pr-6 pt-5 flex flex-row flex-wrap gap-x-8 items-center justify-center lg:justify-between">
                <div className="">
                  <StackedBarChart />
                  <p className="text-center mt-4 font-medium ml-10">
                    Block Vacancy Graph
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
        <section>
          <Card className="w-full login_bg border-none flex justify-center">
            <CardContent>
              <div className="pr-6 pt-5 flex flex-row flex-wrap gap-x-8 items-center justify-center lg:justify-between">
                <div className="">
                  <LineChart />
                  <p className="text-center mt-4 font-medium ml-10">
                    Present Students Count
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
        <div>
          <BirthdayList />
        </div>
      </div>
    </div>
  );
}

export default AdminDashBoard;
