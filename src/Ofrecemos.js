import React from "react";
import InfoSquare from "./Components/InfoSquare";
import "./Ofrecemos.scss";

const Ofrecemos = () => {
  return (
    <div className="ofrecemos">
      <img className="banner" src="/images/petit2.jpg" alt="" />
      <div className="mision">
        <img src="/images/mision.jpg" alt="" />
        <div className="mision-text">
          <h1 className="title">MISIÓN</h1>
          <p>
            En Petit tenemos la misión de brindarle a nuestros clientes una
            experiencia divertida, llena de colores y para diferentes
            personalidades. Nos enfocamos en entregar sabor y calidad para que
            nuestros clientes no solo queden satisfechos con los Macarons, sino
            que siempre quieran probar más. Queremos ser una alternativa nueva
            ofreciendoles a nuestros diversos clientes comodidad, funcionalidad
            y sobre todo color en un snack.
          </p>
        </div>
      </div>
      <InfoSquare
        title1="Propuesta de Valor"
        title2="Objetivo Smart"
        text1="Experiencia, color y personalidad para tus pequeños antojos."
        text2="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus ut
        tempore possimus quam, ipsum dignissimos vel. Nihil at asperiores id?"
        side="rigth"
      ></InfoSquare>
    </div>
  );
};

export default Ofrecemos;
