import React from 'react';
import { useLoaderData } from 'react-router';

const PostDetlies = () => {
    const ditles = useLoaderData();
    console.log(ditles);
    
    return (
        <div className='bg-green-400'>
            <h2> Title : {ditles.title}</h2>
        </div>
    );
};

export default PostDetlies;