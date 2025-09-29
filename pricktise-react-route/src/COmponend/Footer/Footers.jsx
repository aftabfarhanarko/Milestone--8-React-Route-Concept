import React from "react";
import { Link } from "react-router";

const Footers = () => {
  return (
    <div className="bg-purple-700 text-white font-bold py-5 mt-[100px]">
      <p>This Is My Footer Sections. It is Not Changes</p>
      <Link className="mr-5" to={"/"}>
        Home
      </Link>
      <Link className="mr-5" to={"/languages"}>
        Languages
      </Link>
      <Link className="mr-5" to={"/react"}>
        List
      </Link>
      <Link className="mr-5" to={"/room"}>
        Class Room
      </Link>
    </div>
  );
};

export default Footers;
