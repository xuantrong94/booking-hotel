import React, { useState } from "react";

import logo from "../assets/image/logo.svg";
import { FaAlignRight } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen(!open);
  };
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <NavLink to="">
            <img src={logo} alt="to homepage" />
          </NavLink>
          <button className="nav-btn" onClick={handleToggle}>
            <FaAlignRight className="nav-icon" />
          </button>
        </div>
        <ul className={`nav-links ${open ? "show-nav" : ""}`}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/rooms">Rooms</NavLink>
        </ul>
      </div>
      <Outlet />
    </nav>
  );
};

export default Navbar;
