import React from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          comly
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-§-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="/">
              Home
            </a>

            <a className="nav-link" href="/addcomment">
              add comments
            </a>
            <a className="nav-link" href="/login">
              log in
            </a>
            <a className="nav-link" href="/signup">
              sign up
            </a>
            <button
              className="btn btn-danger"
              onClick={() => {
                localStorage.removeItem("token");
              }}
            >
              log out
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
