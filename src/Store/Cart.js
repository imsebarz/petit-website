import React from "react";
import "./Cart.scss";
import { useStateValue } from "../CartContext";
import CartProduct from "./CartProduct";
import Subtotal from "./Subtotal";

const Cart = () => {
  const [{ basket }] = useStateValue();
  return (
    <div className="cart">
      <div className="checkout-container">
        <div className="checkout-left">
          <h1>Tu carrito de compras</h1>
          {basket?.map((item) => (
            <CartProduct
              title={item.title}
              id={item.id}
              price={item.price}
              img={item.img}
              amount={item.amount}
            ></CartProduct>
          ))}
        </div>
        <div className="checkout-rigth">
          <Subtotal></Subtotal>
        </div>
      </div>
    </div>
  );
};

export default Cart;
