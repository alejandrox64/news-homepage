import React from "react";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="../../public/images/logo.svg" width={35} height={24} />
          </a>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item me-4">
                <a className="nav-link" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item me-4">
                <a className="nav-link" href="#">
                  New
                </a>
              </li>
              <li className="nav-item me-4">
                <a className="nav-link" href="#">
                  Popular
                </a>
              </li>
              <li className="nav-item me-4">
                <a className="nav-link" href="#">
                  Trending
                </a>
              </li>
              <li className="nav-item me-4">
                <a className="nav-link" href="#">
                  Categories
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
