import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "./auth";

const Navbar = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "uderline",
    };
  };
  const auth = useAuth();

  return (
    <div>
      <nav>
        <NavLink style={navLinkStyles} to={"/"}>
          Home Icon
        </NavLink>
        <NavLink style={navLinkStyles} to={"/about"}>
          About Icon
        </NavLink>
        <NavLink style={navLinkStyles} to={"/products"}>
          Products
        </NavLink>
        <NavLink style={navLinkStyles} to={"/profile"}>
          Profile
        </NavLink>
        {!auth.user && (
          <NavLink style={navLinkStyles} to={"/login"}>
            Login
          </NavLink>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
