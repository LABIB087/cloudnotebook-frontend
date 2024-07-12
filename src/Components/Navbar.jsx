import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  let history = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    history("/login");
  };
  let location = useLocation();
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark"
      style={{ minHeight: "10vh" }}
    >
      <Link className="navbar-brand" to="/">
        Cloud Note Book
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link
              className={`nav-link ${
                location.pathname === "/" ? "active" : ""
              }`}
              to="/"
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${
                location.pathname === "/about" ? "active" : ""
              }`}
              to="/about"
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${
                location.pathname === "/addnote" ? "active" : ""
              }`}
              to="/addnote"
            >
              Add Note
            </Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${location.pathname === '/allnote'? "active" : ""}`} to="/allnote">
              All Note
            </Link>
          </li>
        </ul>
        
        {!localStorage.getItem("token") ? (
          <form className="d-flex">
            <Link to="/login" className="btn btn-primary mx-2" role="button">
              Login
            </Link>
            <Link to="/signup" className="btn btn-primary mx-2" role="button">
              Signup
            </Link>
          </form>
        ) : (
          <button className="btn btn-primary mx-2" onClick={handleLogout}>
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
