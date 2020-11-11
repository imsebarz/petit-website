import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "./Logo-blanco.svg";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./Header.scss";
import { useStateValue } from "./CartContext";
import { getAmount } from "./reducer";
import useOutsideClick from "./CustomHooks/useOutsideClick";

function Header() {
  const [{ basket }] = useStateValue();
  const [openDropdown, setOpenDropdown] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const ref = useRef();

  useOutsideClick(ref, () => {
    setOpenDropdown(false);
  });

  const toggleDropdown = (e) => {
    e.preventDefault();
    setOpenDropdown(!openDropdown);
  };
  const toggleSearch = (e) => {
    e.preventDefault();
    setOpenSearch(!openSearch);
  };

  return (
    <nav className="navbar">
      <Link to="/">
        <Logo></Logo>
      </Link>
      <ul className="navbar-links">
        <a ref={ref}>
          <li onClick={toggleDropdown}>
            Acerca de Nosotros<ExpandMoreIcon></ExpandMoreIcon>
          </li>
          {openDropdown ? (
            <ul className="dropdown">
              <Link to="/aboutus/ofrecemos">
                <li>¿Qué ofrecemos?</li>
              </Link>
              <Link to="/aboutus/dirigimos">
                <li>¿A quién nos dirigimos?</li>
              </Link>
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
        <div className={openSearch ? "open-search icons" : "icons"}>
          <Link to="">
            <li onClick={toggleSearch}>
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
