import React from "react";
import { useLocation, Link } from "react-router-dom";
import "./NoMatch.scss";

const NoMatch = () => {
  let location = useLocation();

  return (
    <div className="no-match">
      <h3>
        Ups, no encontramos la ruta <code>{location.pathname}</code>
      </h3>
      <Link to="/">
        <button>Volver a la página principal</button>
      </Link>
    </div>
  );
};

export default NoMatch;
