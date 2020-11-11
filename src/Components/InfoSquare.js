import { deprecatedPropType } from "@material-ui/core";
import React from "react";
import "./InfoSquare.scss";

const InfoSquare = ({ title1, title2, text1, text2, side, image }) => {
  return (
    <div className={`info-${side}`}>
      <img src={`/images/${image}`} alt="" />
      <div className="valor-text">
        <h1 className="title">{title1}</h1>
        <h2>{text1}</h2>
        <h1 className="title">{title2}</h1>
        <h2>{text2}</h2>
      </div>
    </div>
  );
};

export default InfoSquare;
