import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet, useNavigation } from 'react-router';


const Root = () => {
    const navagition= useNavigation();
    let isNavagtions = Boolean(navagition.location);
    return (
        <div className='max-w-[500px] mx-auto text-center'>
            <Navbar></Navbar>
            {isNavagtions && <p> Lodinges........</p>}
            <Outlet></Outlet>
        </div>
    );
};

export default Root;