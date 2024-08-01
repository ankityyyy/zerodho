import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

function Navebar() {
  return (
    <nav class="navbar navbar-expand-lg border-bottom nav-bg">
      <div class="container p-2">
        <a class="navbar-brand" href="#">
          <img
            src="/media/images/logo.svg"
            alt="logo"
            className="navimg-width"
          />
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <form class="d-flex" role="search">
            <ul class="navbar-nav  mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active " aria-current="page" href="#">
                  Signup
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  Products
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  Pricing
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  Support
                </a>
              </li>
              <a class="nav-link active" href="#">
                <GiHamburgerMenu />
              </a>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navebar;
