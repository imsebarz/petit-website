import React from "react";
import CurrencyFormat from "react-currency-format";
import "./Subtotal.scss";

const Subtotal = () => {
  return (
    <div className="subtotal">
      <CurrencyFormat
        value={500 * 2}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
        renderText={(value) => <h3> Your subtotal is: {value} COP</h3>}
      />
      <button>Continuar compra</button>
    </div>
  );
};

export default Subtotal;
