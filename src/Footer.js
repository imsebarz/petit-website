import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-info">
        <img src="/images/logo.png" alt="Logo de Petit Macarons" />
        <ul>
          <li>Trabajo</li>
          <li>Más trabajo</li>
          <li>Work</li>
          <li>Contacto</li>
        </ul>
        <div>
          <Link to="/tienda">
            <p>Nuestros macarons</p>
          </Link>
          <Link to="/arma">
            <p>Arma tu macaron</p>
          </Link>
        </div>
      </div>
      <p>&copy; Copyrigth Petit 2020</p>
    </div>
  );
};

export default Footer;
