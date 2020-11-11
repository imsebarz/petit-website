import React, { useState } from "react";
import "./Arma.scss";
import Macaron from "./Macaron.js";
import { SABORES, COLORES, PRESENTACIONES } from "./macarons";
import useDropdown from "./CustomHooks/useDropdown";

const Arma = () => {
  const namesPresentations = [];
  PRESENTACIONES.forEach((it) => namesPresentations.push(it.name));

  const [arriba, ArribaDropdown] = useDropdown(
    "Arriba",
    "tradicional",
    SABORES
  );
  const [abajo, AbajoDropdown] = useDropdown("Abajo", "tradicional", SABORES);
  const [centro, CentroDropdown] = useDropdown(
    "Centro",
    "tradicional",
    SABORES
  );
  const [presentacion, PresentacionDropdown] = useDropdown(
    "Presentacion",
    "Caja de 6",
    namesPresentations
  );

  const [colorArriba, setColorArriba] = useState("#e3c0c9");
  const [colorAbajo, setColorAbajo] = useState("#e3c0c9");
  const [colorCentro, setColorCentro] = useState("#e3c0c9");

  const changeColor = (e) => {
    e.preventDefault();
    setColorArriba(COLORES[arriba]);
    setColorCentro(COLORES[centro]);
    setColorAbajo(COLORES[abajo]);
  };

  return (
    <div className="arma">
      <div className="macaron">
        <Macaron
          colorArriba={colorArriba}
          colorAbajo={colorAbajo}
          colorCentro={colorCentro}
        ></Macaron>
      </div>
      <div className="select">
        <form onSubmit={changeColor}>
          <p>Escoge el sabor de la galleta de arriba</p>
          <ArribaDropdown />
          <p>Escoge el sabor de la crema</p>
          <CentroDropdown />
          <p>Escoge el sabor de la galleta de abajo</p>
          <AbajoDropdown />
          <p>Escoje la cantidad</p>
          <PresentacionDropdown />
          <div className="botones">
            <button>Seleccionar</button>
            <button>Agregar al carrito</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Arma;
