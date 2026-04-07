import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      {/* <h3>My Portfolio</h3> */}
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <div className="nav-items" style={{ marginTop: "17px" }}>
        <Link className="nav-item1" to="/">
          HOME
        </Link>
        <Link className="nav-item2" to="/about">
          ABOUT
        </Link>
        <Link className="nav-item3" to="/projects">
          PROJECTS
        </Link>
        <Link className="nav-item4" to="/contact">
          CONTACT
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
