import { PieChart, Pie, Legend, Tooltip, Cell } from "recharts";

const data = [
  { name: "On Leave", value: 25 },
  { name: "Off Leave", value: 225 },
];

const COLORS = ["#82ca9d", "#8884d8"];

export default function LeavePieChart() {
  return (
    <PieChart width={275} height={250}>
      <Pie
        dataKey="value"
        isAnimationActive={true}
        data={data}
        labelLine={true}
        label
        fill="#8884d8"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Legend />
      <Tooltip />
    </PieChart>
  );
}
