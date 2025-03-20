import React from "react";
import { NavLink, Outlet } from "react-router-dom";
//! we get isActive and isLoading with NavLink and we will deconstructure it below {isActive}

const HostLayout = () => {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };
  return (
    <>
      <nav className="host-nav container">
        <NavLink
          to="/host"
          end
          // this end  - ends the matching here so the / host /income etc it is like saying end = {true}
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Dashboard
        </NavLink>

        <NavLink
          to="income"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Income
        </NavLink>

        <NavLink
          to="vans"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Vans
        </NavLink>

        <NavLink
          to="reviews"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
      {/* outlet creates a hole where the route will render the element/component */}
    </>
  );
};

export default HostLayout;
