import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div>
        <img
          alt="logo-starWars"
          src="https://www.firstcomicsnews.com/wp-content/uploads/2016/09/Star-Wars-Logo-300x129.png"
          className="navbar-img"
        />
      </div>
    </nav>
  );
};

export default Navbar;