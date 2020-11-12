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
import SearchProduct from "./Components/SearchProduct";
import { macarons } from "./macarons.js";
import { ListItemIcon } from "@material-ui/core";

function Header() {
  const [{ basket }] = useStateValue();
  const [openDropdown, setOpenDropdown] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [input, setInput] = useState("");
  const refDropdown = useRef();
  const refSearch = useRef();
  const [searchMacarons, setSearchMacarons] = useState([]);
  const namesMacarons = [];
  macarons.forEach((it) => namesMacarons.push(it.name));

  useOutsideClick(refDropdown, () => {
    setOpenDropdown(false);
  });

  useOutsideClick(refSearch, () => {
    setOpenSearch(false);
  });

  const toggleDropdown = (e) => {
    e.preventDefault();
    setOpenDropdown(!openDropdown);
  };
  const toggleSearch = (e) => {
    e.preventDefault();
    setOpenSearch(!openSearch);
  };

  const updateSearch = (e) => {
    setInput(e.target.value);
    const filtered = namesMacarons.filter((item) => {
      return item.toLowerCase().includes(input.toLowerCase());
    });
    setSearchMacarons(filtered);
  };

  return (
    <nav className="navbar">
      <Link to="/">
        <Logo></Logo>
      </Link>
      <ul className="navbar-links">
        <a ref={refDropdown}>
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
          <a className="search-icon" ref={refSearch}>
            <li>
              <SearchIcon onClick={toggleSearch}></SearchIcon>
              {openSearch ? (
                <input
                  type="text"
                  value={input}
                  onChange={updateSearch}
                ></input>
              ) : (
                ""
              )}
            </li>
            {openSearch && searchMacarons.length > 0 ? (
              <ul className="dropdown-search">
                {searchMacarons.slice(0, 4).map((item) => (
                  <SearchProduct name={item}></SearchProduct>
                ))}
              </ul>
            ) : (
              ""
            )}
          </a>
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
