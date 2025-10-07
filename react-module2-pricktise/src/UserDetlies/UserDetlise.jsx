import React, { useState } from 'react';
import { useLoaderData, Link, useNavigate, Navigate } from 'react-router';

const UserDetlise = () => {
    const ditles = useLoaderData()
    console.log(ditles);
    let navagite = useNavigate();
    const [home, setHome] = useState(false);
    if(home){
        return <Navigate to={'/'}></Navigate>
    }
    
    return (
        <div className='border bg-green-400 p-3 '>
            <p>{ditles.address.suite}</p>
            <p>{ditles.phone}</p>
            <p>{ditles.website}</p>
            <Link to={"/languages"}>
            <button className='bg-red-600 text-white p-2'>Go Back</button>
            </Link>
            <button onClick={() => navagite("/")}>Go Home</button>
            <button  onClick={() => setHome(true)}>Home</button>
        </div>
    );
};

export default UserDetlise;