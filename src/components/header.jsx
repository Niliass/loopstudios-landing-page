import React, { useState } from "react";
import logo from "../assets/images/logo.svg";

function Header() {
  const [state, setState] = useState(false);
  const handleNav = () => {
    setState(!state);
  };
  return (
    <header>
      <div className="container">
        <a href="/" className="logo">
          <img src={logo} alt="logo" />
        </a>
        <nav>
          <button className="nav__icon" onClick={handleNav}>
            <i className={`fa-solid fa-${state ? "x" : "bars"}`}></i>
          </button>
          <ul
            className={state ? "nav__links nav__links--active" : "nav__links"}
          >
            <li>
              <a href="#" className="nav__link">
                About
              </a>
            </li>
            <li>
              <a href="#" className="nav__link">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="nav__link">
                Events
              </a>
            </li>
            <li>
              <a href="#" className="nav__link">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="nav__link">
                Support
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
