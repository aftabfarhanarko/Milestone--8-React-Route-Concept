import React, { Suspense, useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import UserDetlise2 from '../UserDetlise2/UserDetlise2';

const Users = () => {
  const usersa = useLoaderData();
  const [ubdet, setUbdet] = useState(false);


  return (
    <div>
      <h2>This is Users Section</h2>
      <div>
        
        {usersa.map(user => (
          <div key={user.id} className='border mt-2 bg-amber-300 p-5'>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
            <Link
              className='bg-red-500 px-3 rounded-lg hover:bg-gray-300 hover:text-red-600'
              to={`/user/${user.id}`}
            >
              Show Details
            </Link>

             
            <button   className='bg-blue-500 px-3 rounded-lg hover:bg-purple-500 hover:text-white' 
            onClick={() => setUbdet(!ubdet)}
            >{ubdet ? "Hide" :"Show Now"} </button>
            {
                ubdet && <Suspense fallback={<span> Loding....</span>}>
                    <UserDetlise2 ></UserDetlise2>
                </Suspense>
            }
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
