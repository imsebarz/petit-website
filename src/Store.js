import React from "react";
import Product from "./Product";
import "./Store.scss";

const Store = () => {
  return (
    <div className="store">
      <div className="left">
        <h1>Filtro</h1>
        <p>Bucar por: </p>
      </div>
      <div className="products">
        <Product
          title="El Alegre"
          price="20000"
          description="Alguna cajita de macarons bien sabrosa"
          img="como.jpg"
        ></Product>{" "}
        <Product
          title="El Alegre"
          price="20000"
          description="Alguna cajita de macarons bien sabrosa"
          img="como.jpg"
        ></Product>{" "}
        <Product
          title="El Alegre"
          price="20000"
          description="Alguna cajita de macarons bien sabrosa"
          img="como.jpg"
        ></Product>{" "}
        <Product
          title="El Alegre"
          price="20000"
          description="Alguna cajita de macarons bien sabrosa"
          img="como.jpg"
        ></Product>{" "}
        <Product
          title="El Alegre"
          price="20000"
          description="Alguna cajita de macarons bien sabrosa"
          img="como.jpg"
        ></Product>{" "}
        <Product
          title="El Alegre"
          price="20000"
          description="Alguna cajita de macarons bien sabrosa"
          img="como.jpg"
        ></Product>{" "}
        <Product
          title="El Alegre"
          price="20000"
          description="Alguna cajita de macarons bien sabrosa"
          img="como.jpg"
        ></Product>{" "}
        <Product
          title="El Alegre"
          price="20000"
          description="Alguna cajita de macarons bien sabrosa"
          img="como.jpg"
        ></Product>{" "}
        <Product
          title="El Alegre"
          price="20000"
          description="Alguna cajita de macarons bien sabrosa"
          img="como.jpg"
        ></Product>{" "}
      </div>
    </div>
  );
};

export default Store;
