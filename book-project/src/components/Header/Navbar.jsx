import React, { useState } from "react";
import { NavLink } from "react-router";
import "./Navbar.css";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../../fiearbase/firebase";

const googleProvider = new GoogleAuthProvider();
const Navbar = () => {
  const [data, setData] = useState(null);
  const handelSing = () => {
    console.log("SingIn");
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user);
        setData(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

   const handelSinmgOut = () => {
    signOut(auth)
    .then()
   .catch(errors => console.log(errors))
   setData(null)
   }
  const link = (
    <>
      <NavLink to="/">
        <li className="m-2 text-lg font-semibold ">Home</li>
      </NavLink>
      <NavLink to="/about">
        <li className="m-2 text-lg font-semibold ">About</li>
      </NavLink>
      <NavLink to="/readList">
        <li className="m-2 text-lg font-semibold ">My List Book</li>
      </NavLink>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {link}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Book Vibe</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal ">{link}</ul>
      </div>

      <div className="navbar-end">
        {data === null ? (
          <div>
            <button
              onClick={handelSing}
              className="btn btn-accent mr-2 text-white"
            >
              Sign In
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-3">
           <div className="items-center   ">
             <img className="rounded-full w-[40px] mx-auto" src={data.photoURL}></img>
             <p>{data.displayName}</p>
           </div>
            <button onClick={handelSinmgOut} className="btn btn-success text-white">Sign Out</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
