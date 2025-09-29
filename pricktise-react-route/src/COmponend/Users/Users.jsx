import React from 'react';
import { useLoaderData } from 'react-router';

const Users = () => {
    const userses = useLoaderData();
    console.log(userses);
    
    return (
        <div className=''>
           {userses.map(user => <div className='bg-gray-300 py-3 mt-2' >
            <h1>{user.id} : {user.name}</h1>
            <p> Email : {user. email}</p>

           </div>)}
        </div>
    );
};

export default Users;