import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="container">
        <Link to="/" className="logo">
          #VANLIFE
        </Link>
        <div className="links">
          <NavLink
            to="/host"
            className={({ isActive }) => (isActive ? "header-nav-active" : "")}
          >
            Host
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "header-nav-active" : "")}
          >
            About
          </NavLink>
          <NavLink
            to="/vans"
            className={({ isActive }) => (isActive ? "header-nav-active" : "")}
          >
            Vans
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
