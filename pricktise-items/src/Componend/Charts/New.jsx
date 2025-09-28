import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const shopSales = [
  { day: "Day 1", items: 5, totalPrice: 1200 },
  { day: "Day 2", items: 3, totalPrice: 800 },
  { day: "Day 3", items: 7, totalPrice: 1950 },
  { day: "Day 4", items: 4, totalPrice: 1000 },
  { day: "Day 5", items: 6, totalPrice: 1500 },
  { day: "Day 6", items: 8, totalPrice: 2200 },
  { day: "Day 7", items: 2, totalPrice: 600 },
  { day: "Day 8", items: 9, totalPrice: 2500 },
  { day: "Day 9", items: 5, totalPrice: 1300 },
  { day: "Day 10", items: 7, totalPrice: 1800 },
];

const getInformations = (day) => {
  if (day === "Day 1") return "First Day Sales Summary";
  if (day === "Day 2") return "Fewer items sold on day 2.";
  if (day === "Day 3") return "Strong sales performance!";
  if (day === "Day 4") return "Average sales.";
  if (day === "Day 5") return "Better than yesterday.";
  if (day === "Day 6") return "Peak sales day!";
  if (day === "Day 7") return "Very low sales.";
  if (day === "Day 8") return "Highest items sold.";
  if (day === "Day 9") return "Decent recovery.";
  if (day === "Day 10") return "Steady closing.";
  return "";
};
// Bar Card Items Sell Dekhine
const CustomTooltip = ({ active, payload, label }) => {
  const isVisible = active && payload && payload.length;
  return (
    <div
      className={`bg-gray-500 border border-red-500 rounded-xl p-2 ${
        isVisible ? "visible" : "hidden"
      }`}
    >
      {isVisible && (
        <>
          <p>
            {label} : {payload[0].value} Taka
          </p>
          <p>{getInformations(label)}</p>
          <p>Items Sold : {payload[0].payload.items}</p>
        </>
      )}
    </div>
  );
};

const New = () => {
  return (
    <ResponsiveContainer width="100%" height={600}>
      <BarChart
        data={shopSales}
        margin={{
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="4 4" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Bar dataKey="totalPrice" barSize={40} fill="green" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default New;
