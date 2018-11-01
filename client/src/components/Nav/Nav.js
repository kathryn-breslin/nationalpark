import React from "react";
import { Link } from "react-router-dom";

const Nav = () => (
  <ul className="nav nav-tabs">
    <li className="nav-item">
      <Link
        to="/"
        className={
          window.location.pathname === "/" ? "nav-link active" : "nav-link"
        }
        >Home</Link>
    </li>
    {/* <li className="nav-item">
      <Link
        to="/parks"
        className={
          window.location.pathname === "/parks" ? "nav-link active" : "nav-link"
        }
        >Parks</Link>
    </li> */}
    <li className="nav-item">
      <Link
        to="/user"
        className={
          window.location.pathname === "/user" ? "nav-link active" : "nav-link"
        }
        >Log In</Link>
    </li>
  </ul>

);

export default Nav;
