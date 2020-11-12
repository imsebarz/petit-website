import React from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./CartContext";
import { getSubtotal } from "./reducer";
import "./Subtotal.scss";

const Subtotal = () => {
  const [{ basket }] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        value={getSubtotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
        renderText={(value) => <h3> Tu subtotal es: {value} COP</h3>}
      />
      <button>Continuar compra</button>
    </div>
  );
};

export default Subtotal;
