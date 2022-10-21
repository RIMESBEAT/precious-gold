import React from 'react'
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";
import { SiTiktok } from "react-icons/si";
import { Link } from "react-router-dom";
import Socials from "../Socials/Socials";
import "./footer.css";
function Footer() {
  const newYear = new Date().getFullYear();
  return (
    <div>
      <div className="footer__container">
        <div className="logo">

        <h3>Precious <span> Gold</span></h3>
        </div>
        <p>
          Precious Gold is a blog website where you will find great tutorials on
          web design and development. Here each tutorial is beautifully
          described step by step with the required source code.
        </p>
        <div className="footer__social">
          <div class="footer-menu">
            <ul class="f-menu">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/shop">Products</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
          <Socials />
        </div>
      </div>
      <hr />
      <div class="footer-bottom">
        <p>
          copyright &copy;{newYear}
        </p>
      </div>
    </div>
  );
}

export default Footer