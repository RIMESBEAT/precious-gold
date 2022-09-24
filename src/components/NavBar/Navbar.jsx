import React, { Fragment } from "react";
import "./Navbar.css";
import "../MediaScreen/MediaScreen.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBars, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { Outlet, Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../UserContext/UserContext";
import { signOutUser } from "../../util/firebase.util";
import { useState } from "react";
import Logo from "../../assets/logo.svg";
function Navbar() {
  const { currentUser } = useContext(UserContext);
  const [navShow, setNavShow] = useState(false);

  const links = document.querySelectorAll(".links");

  links.forEach((l) => l.addEventListener("click", () => setNavShow(!navShow)));

  return (
    <Fragment>
      <div>
        <header>
          <nav id="nav">
            <div className="nav__container container">
              <Link to="/" className="logo__box">
                <img src={Logo} alt="" className="logo" />
                <div
                  className="nav__btn mobile"
                  onClick={() => setNavShow(!navShow)}
                >
                  {navShow ? (
                    <FontAwesomeIcon icon={faXmark} />
                  ) : (
                    <FontAwesomeIcon icon={faBars} />
                  )}
                </div>
              </Link>
              <div className={navShow ? "list__items active" : "list__items "}>
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
                  {currentUser ? (
                    <li className="links">
                      <span className="links" onClick={signOutUser}>
                        {""}
                        Sign Out{""}
                      </span>
                    </li>
                  ) : (
                    <li className="links">
                      <Link to="/auth" className="">
                        Sign In
                      </Link>
                    </li>
                  )}

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
                  <div className="socials">
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
            <div
              className={navShow ? "overlay active" : "overlay"}
              onClick={() => setNavShow(!navShow)}
            ></div>
          </nav>
        </header>
        <Outlet />
      </div>
    </Fragment>
  );
}

export default Navbar;
