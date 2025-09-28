import React, { useState } from "react";
import { Menu } from "lucide-react";
import { X } from "lucide-react";

const Navbarr = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex justify-between px-5 bg-amber-500 py-5 font-semibold text-xl">
      <span className="flex gap-5">
        <span onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <X className="flex" /> : <Menu className="flex" />}
          <ul
            className={` gap-10 absolute  ${
              open ? "top-27px" : "-top-30"
            }  bg-blue-400 duration-10008 `}
          >
            <li>
              <a href="/#">Home</a>
            </li>
            <li>
              <a href="/#">About</a>
            </li>
            <li>
              <a href="/#">Contact</a>
            </li>
          </ul>
        </span>
        <h1>My Navbar</h1>
      </span>

      <ul className=" gap-10 md:flex hidden">
        <li>
          <a href="/#">Home</a>
        </li>
        <li>
          <a href="/#">About</a>
        </li>
        <li>
          <a href="/#">Contact</a>
        </li>
      </ul>

      <button>Sing in</button>
    </nav>
  );
};

export default Navbarr;
