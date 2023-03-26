import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "../css/navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <h2>Logo</h2>
      <ul className="nav-items">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <Link to="/cart" className="left-nav">
        <ShoppingCart size={25} />
      </Link>
    </div>
  );
};

export default Navbar;
