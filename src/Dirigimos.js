import React from "react";
import InfoSquare from "./Components/InfoSquare";
import "./Dirigimos.scss";

const Dirigimos = () => {
  return (
    <div className="dirigimos">
      <img className="banner" src="/images/petit1.jpg" alt="" />
      <h1 className="title">Segmento de mercado</h1>
      <InfoSquare
        title1="Variables Psicográficas"
        title2="Variables Conductuales"
        text1="Aquellos quienes les guste probar cosas nuevas, sean amantes del
        dulce, les guste ir a algun lugar cómodo a estudiar/trabajar o a
        pasar el rato con amigos y acompañar bebidas como el café con un
        pasabocas. Además les guste el color."
        text2="Frecuencia de uso: De vez en cuando en la tarde, antes de entrar a
        clase o al trabajo, un fin de semana en un plan de amigos/familia, o
        simplemente cuando se tiene un antojo."
        side="left"
      ></InfoSquare>
      <InfoSquare
        title1="Variables Geográficas"
        title2="Variables Demográficas"
        text1="Ciudad: Medellín, Envigado, Sabaneta, Bello, Itaguí"
        text2={
          <ul>
            <li>Edad: 12 a 35</li>
            <li>Sexo: Hombres y Mujeres</li>
            <li>Nivel socioeconómico: Medio, medio alto y alto</li>
            <li>Nivel de instrucción: Estudiantes, Familias</li>
          </ul>
        }
        side="rigth"
      ></InfoSquare>
      <div className="producto">
        <h1 className="title">Tipo de bien</h1>
        <p>Bien de compra</p>
        <h1 className="title">Nivel del producto</h1>
        <strong>Producto básico</strong>
        <p> Macarons</p>
        <strong>Producto Real o mejorado</strong>
        <p>Macarons de colores, con nombres según cualidades</p>
        <strong>Producto Aumentado</strong>
        <p>Personalización, encargos y envios por medio del sitio web</p>
      </div>
    </div>
  );
};

export default Dirigimos;
