import React from "react";
import logo from "../assets/images/logo.svg";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer__container">
          <a href="#">
            <img src={logo} alt="logo footer" />
          </a>
          <nav>
            <ul className="nav__links">
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
        <div className="footer__container">
          <ul className="social__media">
            <li>
              <a href="#">
                <i className="fa-brands fa-square-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-pinterest"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
          </ul>
          <p className="rights">© 2021 Loopstudios. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
