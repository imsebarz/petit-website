import React from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../CartContext";
import "./CartProduct.scss";
import { REMOVE_FROM_BASKET } from "../reducer";

const CartProduct = ({ id, img, title, price, amount }) => {
  // eslint-disable-next-line
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: REMOVE_FROM_BASKET,
      id: id,
    });
  };

  return (
    <div className="cart-product">
      <img src={`/images/${img}`} alt="Macarons" />
      <div className="info">
        <h3>{title}</h3>
        <p>Cantidad: {amount}</p>
        <CurrencyFormat
          value={price}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
          renderText={(value) => <strong>{value} COP</strong>}
        />
        <button onClick={removeFromBasket}>Eliminar</button>
      </div>
    </div>
  );
};

export default CartProduct;
