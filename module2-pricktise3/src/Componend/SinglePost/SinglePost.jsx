import React from 'react';
import { Link } from 'react-router';

const SinglePost = ({element}) => {
    
    return (
        <div className='bg-red-300 p-2 mt-2'>
            <p>{element.id}</p>
            <p>{element.title}</p>
            <Link to={`/post/${element.id}`}>
            <button className='bg-green-700 px-3 rounded-md'>Post Detlise</button>
            </Link>

        </div>
    );
};

export default SinglePost;