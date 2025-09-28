import { Fullscreen } from "lucide-react";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const Carts = () => {
  const data = [
    { name: "Korim", price: 300, items: 4 },
    { name: "Jobbar", price: 700, items: 8 },
    { name: "Ratules", price: 500, items: 2 },
    { name: "Hasan", price: 1200, items: 5 },
    { name: "Sumi", price: 950, items: 7 },
    { name: "Babul", price: 2200, items: 3 },
    { name: "Tania", price: 4300, items: 9 },
    { name: "Rubel", price: 3100, items: 6 },
    { name: "Afsana", price: 2750, items: 4 },
    { name: "Nadim", price: 1800, items: 2 },
    { name: "Shila", price: 3500, items: 5 },
    { name: "Rana", price: 600, items: 1 },
    { name: "Mitu", price: 4200, items: 10 },
    { name: "Sajib", price: 5000, items: 8 },
    { name: "Parvez", price: 2700, items: 3 },
    { name: "Farzana", price: 1500, items: 6 },
    { name: "Milton", price: 3300, items: 5 },
    { name: "Arif", price: 2400, items: 7 },
    { name: "Nusrat", price: 4100, items: 9 },
    { name: "Kabir", price: 3800, items: 4 },
  ];
  const shopData = [
    { day: "Day 1", productsSold: 12, revenue: 2400 },
    { day: "Day 2", productsSold: 8, revenue: 1600 },
    { day: "Day 3", productsSold: 15, revenue: 3000 },
    { day: "Day 4", productsSold: 20, revenue: 5000 },
    { day: "Day 5", productsSold: 10, revenue: 2100 },
    { day: "Day 6", productsSold: 18, revenue: 3600 },
    { day: "Day 7", productsSold: 25, revenue: 6200 },
    { day: "Day 8", productsSold: 14, revenue: 2800 },
    { day: "Day 9", productsSold: 30, revenue: 7200 },
    { day: "Day 10", productsSold: 22, revenue: 4400 },
    { day: "Day 11", productsSold: 16, revenue: 3300 },
    { day: "Day 12", productsSold: 27, revenue: 6800 },
    { day: "Day 13", productsSold: 19, revenue: 3900 },
    { day: "Day 14", productsSold: 12, revenue: 2500 },
    { day: "Day 15", productsSold: 24, revenue: 5000 },
    { day: "Day 16", productsSold: 28, revenue: 7100 },
    { day: "Day 17", productsSold: 17, revenue: 3500 },
    { day: "Day 18", productsSold: 21, revenue: 4300 },
    { day: "Day 19", productsSold: 26, revenue: 6000 },
    { day: "Day 20", productsSold: 32, revenue: 8000 },
  ];

  return (
    <>
      {/* প্রথম Chart */}
      <div>
        <LineChart width={700} height={500} data={data} className="border">
          <Line dataKey="price" />
        </LineChart>
      </div>

      {/* দ্বিতীয় Chart */}
      <LineChart
        width={700}
        height={500}
        data={data}
        className="border border-red-500 mt-5"
      >
        <Line dataKey="price" />
        <XAxis dataKey="name" />
        <YAxis />
      </LineChart>

      {/* তৃতীয় Chart */}
      <LineChart width={700} height={500} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip /> {/* 👈 popup box */}
        <Line type="monotone" dataKey="price" stroke="#8884d8" />
        <Line type="monotone" dataKey="items" stroke="#82ca9d" />
      </LineChart>

      <LineChart width={1200} height={400} data={shopData}>
        <CartesianGrid strokeDasharray="5 4" />
        <XAxis dataKey="day"></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
        <Line dataKey="revenue" stroke="red"></Line>
        <Line dataKey="productsSold"></Line>
        {/* <Line dataKey="productsSold"></Line> */}
      </LineChart>

      <LineChart width={500} height={300} data={shopData}>
        <XAxis dataKey="day"></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
        <Line stroke="green" dataKey="revenue"></Line>
        <Line stroke="red" dataKey="productsSold"></Line>
      </LineChart>
    </>
  );
};

export default Carts;
