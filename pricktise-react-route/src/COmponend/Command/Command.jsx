import React from "react";
import { Link, useLoaderData } from "react-router";

const Command = () => {
  const commandes = useLoaderData();

  return (
    <div>
      {commandes.map((coment) => (
        <div className="bg-green-700 mt-3 py-3 text-white">
          <p>Command Id : {coment.id}</p>
          <p>Command Name : {coment.name}</p>
          <p className="mb-4">Command Email : {coment.email}</p>
          <Link className="bg-red-600 py-1 px-2 rounded " to={`/command/${coment.id}`}>Show Command Detiles</Link>
          <Link className="bg-blue-600 py-1 px-2 rounded "
           to={`/command/${coment.id}`}>Show Command Detiles</Link>
        </div>
      ))}
    </div>
  );
};

export default Command;
