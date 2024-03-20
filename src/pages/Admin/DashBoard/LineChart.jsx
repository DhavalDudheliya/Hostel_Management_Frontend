import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    date: "1 Jun",
    present: 220,
    absent: 30,
  },
  {
    date: "Today",
    present: 222,
    absent: 28,
  },
  {
    date: "3 Jun",
    present: 180,
    absent: 70,
  },
  {
    date: "4 Jun",
    present: 190,
    absent: 60,
  },
];

export default function StudentCountLineChart() {
  return (
    <LineChart
      width={360}
      height={250}
      // isAnimationActive={true}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="present"
        stroke="#8884d8"
        activeDot={{ r: 8}}
      />
      <Line type="monotone" dataKey="absent" activeDot={{ r: 8}} stroke="#82ca9d" />
    </LineChart>
  );
}
