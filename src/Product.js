import React from "react";
import "./Product.scss";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const Product = ({ title, description, price, img }) => {
  return (
    <div className="product">
      <div className="product-info">
        <h1>{title}</h1>
        <p>{description}</p>
        <small>$</small>
        <strong>{price} COP</strong>
      </div>
      <button>
        <ShoppingCartIcon></ShoppingCartIcon>
      </button>
      <img src={`/images/${img}`} alt="" />
    </div>
  );
};

export default Product;
