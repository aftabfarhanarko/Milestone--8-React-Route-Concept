import React from "react";
import bookImg from "../../assets/pngwing 1.png";

const Banner = () => {
  return (
    <div className="flex justify-between items-center px-25 bg-base-300 mt-14 mb-10 py-10 rounded-lg">
      <div>
        <h1 className="text-4xl">Books to freshen up your bookshelf</h1>
        <button className="btn bg-[#23be0a] mt-4 text-white">
          View The List
        </button>
      </div>
      <div>
        <img className="w-[300px]" src={bookImg}></img>
      </div>
    </div>
  );
};

export default Banner;
