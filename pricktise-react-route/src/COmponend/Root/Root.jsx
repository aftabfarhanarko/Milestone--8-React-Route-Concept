import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router";
import Footers from "../Footer/Footers";

const Root = () => {
  return (
    <div className="text-center ">
      <Navbar></Navbar>
      <div className="flex items-center">
        <aside className="w-[20%] bg-orange-400 py-10 mt-5">
          <h2>This is a Aside Bar</h2>
        </aside>
        <div className="w-[80%]">
          <Outlet></Outlet>
        </div>
      </div>
      <Footers></Footers>
    </div>
  );
};

export default Root;
