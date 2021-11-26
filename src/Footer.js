import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-info">
        <Link to="/" className="logo-footer">
          <img src="/images/logo.png" alt="Logo de Petit Macarons" />
        </Link>
        <ul>
          <Link to="/aboutus/ofrecemos">
            <p>¿Qué ofrecemos?</p>
          </Link>
          <Link to="/aboutus/dirigimos">
            <p>¿A quién nos dirigimos?</p>
          </Link>
          <Link to="/contacto">
            <p>Contacto</p>
          </Link>
          <Link to="/tienda">
            <p>Nuestros macarons</p>
          </Link>
          <Link to="/arma">
            <p>Arma tu macaron</p>
          </Link>
        </ul>
      </div>
      <div className="copy-text">
        <p>&copy; Copyrigth Petit 2021</p>
      </div>
    </div>
  );
};

export default Footer;
