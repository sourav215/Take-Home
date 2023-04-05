import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/travel">Travel</Link>
        </li>
        <li></li>
      </ul>
    </div>
  );
};

export default Navbar;
