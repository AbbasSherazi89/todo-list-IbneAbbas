import React from "react";
import { NavLink } from "react-router-dom";
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
              <NavLink className="nav-link" to="/">
                <button className="btn btn-outline-success">Todo List</button>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/hof">
                <button className="btn btn-outline-success">HOF</button>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/hooks">
                <button className="btn btn-outline-success">
                  Custom Hooks
                </button>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
