import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetiles = () => {
    const detlies = useLoaderData()
    console.log(detlies);
    
    return (
        <div className='bg-purple-400 py-3 text-white'>
            <h>User Name : {detlies.username}</h>
            <p>Address City: {detlies.address.city}</p>
            <p>Zipcode : {detlies.address.zipcode}</p>
        </div>
    );
};

export default UserDetiles;