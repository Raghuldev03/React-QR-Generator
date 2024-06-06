import React from "react";
import "./header.css";
function Header() {
  return (
    <nav class="navbar navbar-dark bg-dark fixed-top">
      <div class="container-fluid">
        <a className="navbar-brand" href="#">
          React QR Generator App
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasDarkNavbar"
          aria-controls="offcanvasDarkNavbar"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="offcanvas offcanvas-end text-bg-dark"
          tabindex="-1"
          id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel"
        >
          <div class="offcanvas-header">
            <h5 className="offcanvas-title">React QR Generator App</h5>
            <button
              type="button"
              class="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  About React
                </a>
                <br></br>
                <p>
                  React is a JavaScript library for building user interfaces,
                  enabling developers to create inter- active and dynamic web
                  applications efficiently.
                </p>
                <br></br>
                <hr></hr>
              </li>
              <li className="nav-item">
                <a class="nav-link active" href="#">
                  QR-Generator
                </a>
                <br></br>
                <p>
                  A React QR Cod Generator is a web application built using
                  React that allows users to input URLs and generates
                  corresponding QR codes, which can be saved for various
                  purposes such as sharing links or information.
                </p>
                <br></br>
                <hr></hr>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
