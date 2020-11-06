import React from "react";
import "./Arma.scss";
import { ReactComponent as Macaron } from "./macaron.svg";

const Arma = () => {
  return (
    <div className="arma">
      <div>
        <Macaron></Macaron>
      </div>
      <div>
        <h1>Options</h1>
      </div>
    </div>
  );
};

export default Arma;
