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
     
    </>
  );
};

export default Navbar;
