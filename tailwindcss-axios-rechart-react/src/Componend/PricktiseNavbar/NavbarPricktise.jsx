import React, { useState } from "react";
import { Menu } from "lucide-react";
import { X } from "lucide-react";

const NavbarPricktise = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex justify-between py-10 px-6 ">
      <span className="flex gap-5">
        <span onClick={() => setOpen(!open)}>
          {open ? (
            <X className="flex md:hidden" />
          ) : (
            <Menu className="flex md:hidden" />
          )}
        </span>

        <ul
          className={`md:hidden absolute bg-amber-400 
                  ${open ? " top-19" : "-top-33"} duration-1000 px-10 `}
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

      <ul className="md:flex hidden gap-5 ">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Bloges</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
      </ul>

      <span className="flex gap-5">
        <span onClick={() => setOpen(!open)}>
          {open ? (
            <X className="flex md:hidden" />
          ) : (
            <Menu className="flex md:hidden" />
          )}
        </span>

        <ul
          className={`md:hidden absolute bg-amber-400 
                  ${open ? " top-19" : "-top-33"} duration-1000 px-10 `}
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
        <h3>Sing in</h3>
      </span>
    </nav>
  );
};

export default NavbarPricktise;
