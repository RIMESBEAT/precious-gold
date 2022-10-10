import React, { Fragment, useContext, useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";
import { Outlet, Link } from "react-router-dom";
import { signOutUser } from "../../util/firebase.util";
import CartIcon from "../CartIcon/CartIcon";
import CartDropDown from "../CartDropDown/CartDropDown";
import { UserContext } from "../../Context/UserContext/UserContext";
import { CartContext } from "../../Context/CartContext/CartContext";
function Navbar() {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const [navShow, setNavShow] = useState(false);

  const navBarToggleHandler = () => setNavShow(!navShow);
  const cartToggleHandler = () => setIsCartOpen(!isCartOpen);

  const links = document.querySelectorAll(".links");

  links.forEach((l) => l.addEventListener("click", () => setNavShow(!navShow)));

  return (
    <Fragment>
      <div>
        <header>
          <nav id="nav">
            <div className="nav__container container">
              <Link to="/" className="logo__box">
                <h4 className="logo">
                  Precious <span>Gold</span>
                </h4>
                <div className="nav__btn " onClick={navBarToggleHandler}>
                  {navShow ? (
                    <FontAwesomeIcon icon={faXmark} />
                  ) : (
                    <FontAwesomeIcon icon={faBars} />
                  )}
                </div>
                <div className="cart__icon__sm">
                  <CartIcon />
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
                    <Link to="/shop">Designs</Link>
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
                        Sign Out
                      </span>
                    </li>
                  ) : (
                    <li className="links">
                      <Link to="/auth" className="">
                        Sign In
                      </Link>
                    </li>
                  )}

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
                  <div className="cart__icon__bg">
                    <CartIcon />
                  </div>
                </ul>
              </div>
            </div>
            {isCartOpen && <CartDropDown />}

            <span
              className={isCartOpen ? "overlay    active" : "overlay"}
              onClick={cartToggleHandler}
            ></span>
            <div
              className={navShow ? "overlay active" : "overlay"}
              onClick={navBarToggleHandler}
            ></div>
          </nav>
        </header>
        <Outlet />
      </div>
    </Fragment>
  );
}

export default Navbar;
