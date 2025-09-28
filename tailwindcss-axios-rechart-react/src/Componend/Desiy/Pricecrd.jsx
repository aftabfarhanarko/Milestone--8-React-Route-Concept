import React from "react";

const Pricecrd = ({ priceas }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-sm flex flex-col">
      <div className="card-body">
        <span className="badge badge-xs badge-warning">Most Popular</span>
        <div className="flex justify-between">
          <h2 className="text-3xl font-bold">{priceas.planName}</h2>
          <span className="text-xl">{priceas.price}</span>
        </div>
        <ul className="mt-6 flex flex-col gap-2 text-xs flex-1">
          {priceas.features.map((ones) => (
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 me-2 inline-block text-success"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>{ones}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <button className="btn btn-primary btn-block">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Pricecrd;
