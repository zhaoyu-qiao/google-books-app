import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav id="nav" className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Home{" "}
      </Link>{" "}
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" ||
                window.location.pathname === "/search"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Search{" "}
            </Link>{" "}
          </li>{" "}
          <li className="nav-item">
            <Link
              to="/search"
              className={
                window.location.pathname === "/search"
                  ? "nav-link active"
                  : "nav-link"
              }
            ></Link>{" "}
          </li>{" "}
          <li className="nav-item">
            <Link
              to="/saved"
              className={
                window.location.pathname === "/saved"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Saved{" "}
            </Link>{" "}
          </li>{" "}
        </ul>{" "}
      </div>{" "}
    </nav>
  );
}

export default Nav;
