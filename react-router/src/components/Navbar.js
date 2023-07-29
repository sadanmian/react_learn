import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <Link to={"/"}>Home Icon</Link>
        <Link to={"/about"}>About Icon</Link>
      </nav>
    </div>
  );
};

export default Navbar;
