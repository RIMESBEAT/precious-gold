import React, { Fragment } from "react";
import "./Navbar.css";
import "../MediaScreen/MediaScreen.css";
// import "../../components/MediaScreen/MediaScreen.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBars, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { Outlet, Link } from "react-router-dom";

function Navbar({ setShow }) {
  const openNavBtn = document.querySelector(".open__nav");
  const closeNavBtn = document.querySelector(".close__nav");
  const navItems = document.querySelector(".list__items");
  const overlay = document.querySelector(".overlay");
  const links = document.querySelectorAll(".links");
  const openNavbarHandler = () => {
    openNavBtn.classList.add("sm-hidden");
    overlay.classList.remove("sm-hidden");
    navItems.classList.remove("sm-hidden");
    closeNavBtn.classList.remove("sm-hidden");
  };
  const closeNavbarHandler = () => {
    openNavBtn.classList.remove("sm-hidden");
    overlay.classList.add("sm-hidden");
    navItems.classList.add("sm-hidden");
    closeNavBtn.classList.add("sm-hidden");
  };

  links.forEach((l) => l.addEventListener("click", closeNavbarHandler));

  return (
    <Fragment>
      <div>
        <header>
          <nav id="nav">
            <div className="nav__container container">
              <div className="logo__box">
                <h1 className="logo">
                  precious<span>gold</span>
                </h1>
                <button
                  onClick={openNavbarHandler}
                  className="open__nav nav__btn"
                >
                  <FontAwesomeIcon icon={faBars} />
                </button>
                <button
                  onClick={closeNavbarHandler}
                  className="close__nav nav__btn  "
                >
                  <FontAwesomeIcon icon={faXmark} />
                </button>
              </div>
              <div className="list__items flex sm-hidden">
                <ul className="nav__links">
                  <li className="links active">
                    <Link className="active" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="links">
                    <Link to="/designs">Designs</Link>
                  </li>
                  <li className="links">
                    <Link to="/uploads">Uploads</Link>
                  </li>
                  <li className="links">
                    <Link to="/contact">Contact</Link>
                  </li>
                  <li className="links">
                    <Link to="/cart">
                      <div className="cart__box">
                        <span>
                          <FontAwesomeIcon icon={faCartPlus} />
                        </span>
                        <span>0</span>
                      </div>
                    </Link>
                  </li>
                  {/* <li className="links">
                    <Link to="/accounts" className="account__Btn">
                      Sign-In
                    </Link>
                  </li> */}
                  <div className="socials flex links">
                    <Link
                      to="https://web.whatsapp.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa-brands fa-whatsapp"></i>
                    </Link>
                    <Link
                      to="https://m.me/elijah.isaiah.5815"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa-brands fa-facebook"></i>
                    </Link>

                    <Link
                      to="https://tiktok.com/@rimesbeat"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa-brands fa-tiktok"></i>
                    </Link>
                    <Link
                      to="https://www.instagram.com/rimes_beats/?hl=en"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa-brands fa-instagram"></i>
                    </Link>
                  </div>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        <Outlet />
      </div>
    </Fragment>
  );
}

export default Navbar;
