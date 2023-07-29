import React from "react";
import { Link, Outlet } from "react-router-dom";

const Products = () => {
  return (
    <>
      <div>
        <input type="search" placeholder="Search..." />
      </div>
      <nav>
        {/* Relative link */}
        <Link to={"featured"}>Featured</Link>
        <Link to={"new"}>New Products</Link>
      </nav>
      <Outlet />
    </>
  );
};

export default Products;
