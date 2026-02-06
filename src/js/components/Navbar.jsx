import React from "react";

const bootstrapNavbarSelect = "Start Bootstrap"
const homeNavbarSelect = "Home"
const aboutNavbarSelect = "About"
const servicesNavbarSelect = "Services"
const contactNavbarSelect = "Contact"

export const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {bootstrapNavbarSelect}
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
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <a className="nav-link active" aria-current="page" href="#">
                {homeNavbarSelect}
              </a>
              <a className="nav-link me-auto" href="#">
                {aboutNavbarSelect}
              </a>
              <a className="nav-link" href="#">
                {servicesNavbarSelect}
              </a>
              <a className="nav-link" href = "#">
                {contactNavbarSelect}
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
