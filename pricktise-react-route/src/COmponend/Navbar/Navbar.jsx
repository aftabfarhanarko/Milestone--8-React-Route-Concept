import React from 'react';
import { Link, NavLink } from 'react-router';
import '../../index.css'

const Navbar = () => {
    return (
        <div className='bg-gray-400 py-3  mx-auto '>
            <h2 className='text-3xl text-red-600'>This is Navbar Sections</h2>
            <nav className='gap-4 mt-5 border-t py-2 text-yellow-300'>
                <NavLink className='mr-5' to={"/"}>Home</NavLink>
                <NavLink className='mr-5' to={"/languages"}>Languages</NavLink>
                <NavLink className='mr-5' to={"/react"}>List</NavLink>
                <NavLink className='mr-5' to={"/room"}>Class Room</NavLink>
                <NavLink className='mr-5' to={"/users"}>User Data</NavLink>
                <NavLink className='mr-5' to={"/post"}>post</NavLink>
            </nav>
        </div>
    );
};

export default Navbar;