import React from "react";
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Todo list 
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/hof">
                HOF
              </Link>
            </li> 
            <li className="nav-item">
              <Link className="nav-link" to="/hooks">
                Custom Hooks
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
