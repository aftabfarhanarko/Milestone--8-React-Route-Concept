import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
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

// প্রতিদিনের জন্য ছোট description
const getInformations = (label) => {
  if (label === "Day 1") return "First day sales summary.";
  if (label === "Day 2") return "Fewer items sold on day 2.";
  if (label === "Day 3") return "Strong sales performance!";
  if (label === "Day 4") return "Average sales.";
  if (label === "Day 5") return "Better than yesterday.";
  if (label === "Day 6") return "Peak sales day!";
  if (label === "Day 7") return "Low sales recorded.";
  if (label === "Day 8") return "Highest items sold.";
  if (label === "Day 9") return "Decent recovery.";
  if (label === "Day 10") return "Steady closing.";
  return "";
};

// Custom Tooltip Component
const CustomTooltip = ({ active, payload, label }) => {
  const isVisible = active && payload && payload.length;
  return (
    <div
      className="custom-tooltip"
      style={{
        background: "#fff",
        border: "1px solid #ccc",
        padding: "10px",
        borderRadius: "5px",
        visibility: isVisible ? "visible" : "hidden"
      }}
    >
      {isVisible && (
        <>
          <p className="label">
            {label} : {payload[0].value} Taka
          </p>
          <p className="intro">{getInformations(label)}</p>
          <p className="desc">Items Sold: {payload[0].payload.items}</p>
        </>
      )}
    </div>
  );
};

const Charts = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={shopSales}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        {/* totalPrice দিয়ে Bar বানালাম */}
        <Bar dataKey="totalPrice" barSize={30} fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Charts;
