import React from 'react';
import { NavLink, useNavigation } from 'react-router';
import '../Root/Root.css';

const Navbar = () => {
  const navigation = useNavigation();
  const isPending = navigation.state === "loading";

  return (
    <div>
      <h2>This is Navbar</h2>
      <nav>
        <NavLink to="/">
          {({ isActive }) => (
            <span className={isActive ? 'text-blue-600' : ''}>
              Home
            </span>
          )}
        </NavLink>

        <NavLink to="/languages" className="ml-3">
          Languages
        </NavLink>

        <NavLink to="/users" className="ml-3">
          Users
        </NavLink>

        {isPending && (
          <span className="ml-4 text-blue-500 font-semibold">Loading...</span>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
