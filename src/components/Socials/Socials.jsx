import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Socials.css"

function Socials() {
  return (
    <div>
      <div className="socials__general">
        <Link to="https://web.whatsapp.com" target="_blank" rel="noreferrer">
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
      <Outlet />
    </div>
  );
}

export default Socials;
