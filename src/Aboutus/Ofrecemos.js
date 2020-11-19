import React from "react";
import InfoSquare from "../InfoSquare";
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
            ofreciendoles a nuestros diversos clientes funcionalidad, comodidad
            en nuestros canales y sobre todo color en un snack.
          </p>
        </div>
      </div>
      <InfoSquare
        title1="Propuesta de Valor"
        title2="Objetivos Smart"
        text1="Experiencia, color y personalidad para tus pequeños antojos."
        text2={
          <ul>
            <li>
              Aumentar la comunidad en redes sociales (instagram) alcanzando
              5000 seguidores, para ampliar el reconocimiento de la marca en un
              plazo de 2 meses
            </li>
            <li>
              Aumentar las visitas al sitio web a través de la publicidad en
              redes donde se invite al público a explorar este canal, y de esta
              manera, conseguir un aumento del 50% de las ventas, en un plazo de
              6 meses.
            </li>
          </ul>
        }
        side="rigth"
        image="propuesta.jpg"
      ></InfoSquare>
    </div>
  );
};

export default Ofrecemos;
