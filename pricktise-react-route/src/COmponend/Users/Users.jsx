import React from "react";
import { Link, useLoaderData } from "react-router";

const Users = () => {
  const userses = useLoaderData();
  console.log(userses);

  return (
    <div className="">
      {userses.map((user) => (
        <div key={user.id} className="bg-gray-300 py-3 mt-2">
          <h1>
            {user.id} : {user.name}
          </h1>
          <p> Email : {user.email}</p>
          <Link
            className="bg-amber-500 text-white  py-1 px-2 mt-2 rounded"
            to={`/singleUser/${user.id}`}
          >
            Show Detiles
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Users;
