import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "uderline",
    };
  };
  return (
    <div>
      <nav>
        <NavLink style={navLinkStyles} to={"/"}>
          Home Icon
        </NavLink>
        <NavLink style={navLinkStyles} to={"/about"}>
          About Icon
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
