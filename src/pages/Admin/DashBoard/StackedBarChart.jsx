import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "A",
    vacancy: 20,
    filled: 10,
  },
  {
    name: "B",
    vacancy: 30,
    filled: 60,
  },
  {
    name: "C",
    vacancy: 0,
    filled: 60,
  },
  {
    name: "D",
    vacancy: 12,
    filled: 28,
  },
];

export default function StackedBarChart() {
  return (
    <BarChart width={300} height={250} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="filled" stackId="a" fill="#8884d8" />
      <Bar dataKey="vacancy" stackId="a" fill="#82ca9d" />
    </BarChart>
  );
}
