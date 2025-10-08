import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <div className='bg-yellow-500 p-4'>
            <p>This Is Footer Of The Website</p>
             <span><Link>Home</Link></span>
             <span><Link>Post</Link></span>
             <span><Link>Command</Link></span>
        </div>
    );
};

export default Footer;