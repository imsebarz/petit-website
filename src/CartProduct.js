import React from "react";
import CurrencyFormat from "react-currency-format";
import "./CartProduct.scss";

const CartProduct = ({ id, img, title, price }) => {
  return (
    <div className="cart-product">
      <img src={`/images/${img}`} alt="" />
      <div className="info">
        <h3>{title}</h3>
        <CurrencyFormat
          value={price}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
          renderText={(value) => <strong>{value} COP</strong>}
        />
        <button>Eliminar</button>
      </div>
    </div>
  );
};

export default CartProduct;
