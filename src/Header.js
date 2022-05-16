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
import SearchProduct from "./SearchProduct";
import { macarons } from "./macarons.js";

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

  const [sideDisplay, setSideDisplay] = useState("-100%");
  const [isOpen, setIsOpen] = useState("closed");

  const toggleSidebar = () => {
    if (sideDisplay === "-100%") {
      setSideDisplay("0%");
      setIsOpen("open");
    } else {
      setSideDisplay("-100%");
      setIsOpen("closed");
    }
  };

  useOutsideClick(refSearch, () => {
    setOpenSearch(false);
  });

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

        <Link to="/tienda">
          <li>Macarons</li>
        </Link>
        <Link to="/arma">
          <li>Arma tu Macaron</li>
        </Link>
        <Link to="/marketplace">
          <li>Tienda</li>
        </Link>
        <Link to="/aboutus">
          <li>Acerca de nosotros</li>
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
      <div className={`hamburger ${isOpen}`} onClick={toggleSidebar}>
        <svg
          width="105"
          height="90"
          viewBox="0 0 105 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="hamburger">
            <path
              id="bottom"
              d="M10.5875 70.3995H94.5039C95.7861 70.3995 97.0558 70.6521 98.2405 71.1428C99.4251 71.6335 100.502 72.3527 101.408 73.2594C102.315 74.1661 103.034 75.2425 103.525 76.4271C104.016 77.6118 104.268 78.8815 104.268 80.1637C104.268 81.446 104.016 82.7157 103.525 83.9003C103.034 85.085 102.315 86.1614 101.408 87.0681C100.502 87.9748 99.4251 88.694 98.2405 89.1847C97.0558 89.6754 95.7861 89.928 94.5039 89.928H10.5875C9.30528 89.928 8.03558 89.6754 6.85093 89.1847C5.66628 88.694 4.58988 87.9748 3.68318 87.0681C2.77649 86.1614 2.05726 85.085 1.56656 83.9003C1.07586 82.7157 0.823303 81.446 0.823303 80.1637C0.823303 78.8815 1.07586 77.6118 1.56656 76.4271C2.05726 75.2425 2.77649 74.1661 3.68318 73.2594C4.58988 72.3527 5.66628 71.6335 6.85093 71.1428C8.03558 70.6521 9.30528 70.3995 10.5875 70.3995V70.3995Z"
              fill="#E9E9E9"
            />
            <path
              id="middle"
              d="M10.5875 35.267H94.5039C95.7861 35.267 97.0558 35.5195 98.2405 36.0102C99.4251 36.5009 100.502 37.2201 101.408 38.1268C102.315 39.0335 103.034 40.1099 103.525 41.2946C104.016 42.4792 104.268 43.7489 104.268 45.0312C104.268 46.3134 104.016 47.5832 103.525 48.7678C103.034 49.9525 102.315 51.0289 101.408 51.9355C100.502 52.8422 99.4251 53.5615 98.2405 54.0522C97.0558 54.5429 95.7861 54.7954 94.5039 54.7954H10.5875C9.30528 54.7954 8.03558 54.5429 6.85093 54.0522C5.66628 53.5615 4.58988 52.8422 3.68318 51.9355C2.77649 51.0289 2.05726 49.9525 1.56656 48.7678C1.07586 47.5832 0.823303 46.3134 0.823303 45.0312C0.823303 43.7489 1.07586 42.4792 1.56656 41.2946C2.05726 40.1099 2.77649 39.0335 3.68318 38.1268C4.58988 37.2201 5.66628 36.5009 6.85093 36.0102C8.03558 35.5195 9.30528 35.267 10.5875 35.267V35.267Z"
              fill="#E9E9E9"
            />
            <path
              id="top"
              d="M10.5875 0.138149H94.5039C97.0935 0.138149 99.5771 1.16688 101.408 2.99803C103.239 4.82918 104.268 7.31275 104.268 9.90238C104.268 12.492 103.239 14.9756 101.408 16.8067C99.5771 18.6379 97.0935 19.6666 94.5039 19.6666H10.5875C7.9979 19.6666 5.51433 18.6379 3.68318 16.8067C1.85203 14.9756 0.823303 12.492 0.823303 9.90238C0.823303 7.31275 1.85203 4.82918 3.68318 2.99803C5.51433 1.16688 7.9979 0.138149 10.5875 0.138149V0.138149Z"
              fill="#E9E9E9"
            />
          </g>
        </svg>
      </div>
      <aside className="sidebar" style={{ right: sideDisplay }}>
        <ul className="aside-links">
          <li>
            {" "}
            <Link to="/tienda" href="">
              {" "}
              Macarons
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/arma" href="">
              {" "}
              Arma tu macaron
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/contacto" href="">
              {" "}
              Contacto
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/aboutus/ofrecemos" href="">
              {" "}
              Que ofrecemos
            </Link>
          </li>
        </ul>
      </aside>
    </nav>
  );
}

export default Header;
