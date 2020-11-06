import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./Header.scss";
import { useStateValue } from "./CartContext";
import { getAmount } from "./reducer";
import useOutsideClick from "./useOutsideClick";

function Header() {
  const [{ basket }] = useStateValue();
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useOutsideClick(ref, () => {
    setOpen(false);
  });

  const toggleDropdown = (e) => {
    e.preventDefault();
    setOpen(!open);
  };

  return (
    <nav className="navbar">
      <Link to="/">
        <h1 className="logo">Petit</h1>
      </Link>
      <ul className="navbar-links">
        <a ref={ref}>
          <li onClick={toggleDropdown}>
            Acerca de Nosotros<ExpandMoreIcon></ExpandMoreIcon>
          </li>
          {open ? (
            <ul className="dropdown">
              <li>Trabajo</li>
              <li>Más trabajo</li>
              <li>Work</li>
            </ul>
          ) : (
            ""
          )}
        </a>
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
              <span className={getAmount(basket) > 0 ? "basket-amount" : ""}>
                {getAmount(basket)}
              </span>
            </li>
          </Link>
        </div>
      </ul>
    </nav>
  );
}

export default Header;
