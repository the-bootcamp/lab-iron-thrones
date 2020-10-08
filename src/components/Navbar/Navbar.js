import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className='navbar navbar-dark bg-dark'>
        <NavLink className='navbar-brand' to='/'>
          GoT - by Debora Crescenzo
        </NavLink>

        <div className='navbar-brand'>
          <NavLink className='nav-item active' to='/'>
            Home
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
