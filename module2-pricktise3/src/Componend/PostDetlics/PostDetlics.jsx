import React from 'react';
import { Navigate } from 'react-router';
import { Link, useLoaderData, useNavigate, useParams } from 'react-router';

const PostDetlics = () => {
    const detlics = useLoaderData();
    const {postId} = useParams();
    
    const navagite  = useNavigate();
    return (
        <div className='bg-pink-300 mb-2 mt-2 p-3'>
            <h1>{postId}</h1>
            <p>{detlics.body}</p>
            <Link to={-1}>Go Back</Link>
            <Link onClick={() => navagite('/')}>Navagite</Link>
        </div>
    );
};

export default PostDetlics;