import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import "./Header.scss";

function Header() {
  return (
    <nav className="navbar">
      <Link to="/">
        <h1 className="logo">Petit</h1>
      </Link>
      <ul className="navbar-links">
        <Link to="/tienda">
          <li>Macarons</li>
        </Link>
        <Link to="/arma">
          <li>Arma tu Macaron</li>
        </Link>
        <Link to="/contacto">
          <li>Contacto</li>
        </Link>
        <div className="icons">
          <Link to="">
            <li>
              <SearchIcon></SearchIcon>
            </li>
          </Link>
          <Link to="/carrito">
            <li>
              <ShoppingCartIcon></ShoppingCartIcon>
            </li>
          </Link>
        </div>
      </ul>
    </nav>
  );
}

export default Header;
