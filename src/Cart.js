import React from "react";
import "./Cart.scss";
import Product from "./Product";
import Subtotal from "./Subtotal";

const Cart = () => {
  return (
    <div className="cart">
      <div className="checkout-container">
        <div className="checkout-left">
          <h1>Your shopping basket</h1>
          <Product
            title="El Alegre"
            price="20.000"
            description="Alguna cajita de macarons bien sabrosa"
            img="como.jpg"
          ></Product>{" "}
        </div>
        <div className="checkout-rigth">
          <Subtotal></Subtotal>
        </div>
      </div>
    </div>
  );
};

export default Cart;
