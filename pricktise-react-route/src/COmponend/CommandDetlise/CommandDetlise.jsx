import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const CommandDetlise = () => {
    const detlies = useLoaderData();
    console.log(detlies);
    const nevagit = useNavigate();
    return (
        <div className='bg-purple-400 py-3 text-white'>
            <h1>Id : {detlies.id}</h1>
            <p>Commant Detlies : {detlies.body}</p>
            <button onClick={() => nevagit(-1)}>Go Back</button>
            <button onClick={() => nevagit('/post')}>Go Back</button>
        </div>
    );
};

export default CommandDetlise;