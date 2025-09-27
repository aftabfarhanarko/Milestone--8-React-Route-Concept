import React, { useState } from "react";
import { Menu } from "lucide-react";
import { X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="flex justify-between items-center mx-7 my-5 ">
        <span className="flex gap-5" onClick={() => setOpen(!open)}>
          {open ? (
            <X className="flex md:hidden" />
          ) : (
            <Menu className="flex md:hidden" />
          )}

          <ul
            className={`md:hidden absolute bg-amber-400 
             ${open ? " top-11" : "-top-33"} duration-1000 px-10 `}
          >
            <li className="hover:bg-amber-600">
              <a href="/">Home</a>
            </li>
            <li className="hover:bg-amber-600">
              <a href="/hero">Hero</a>
            </li>
            <li className="hover:bg-amber-600">
              <a href="/bloag">Bloge</a>
            </li>
            <li className="hover:bg-amber-600">
              <a href="/about">About</a>
            </li>
          </ul>
          <h2>My Navbar</h2>
        </span>

        <ul className=" hidden md:flex gap-10 items-center">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/hero">Hero</a>
          </li>
          <li>
            <a href="/bloag">Bloge</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
        <h4>Sing in</h4>
      </nav>
      <div className="navbar bg-base-100 shadow-sm mt-8 border">
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
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <details>
                <summary>Parent</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
