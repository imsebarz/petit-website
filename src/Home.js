import React from "react";
import "./Home.scss";
import Product from "./Product";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <img
          src="https://images.unsplash.com/photo-1570476922354-81227cdbb76c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80"
          alt=""
        />
      </div>
      <h1 className="title">Los preferidos</h1>
      <div className="row">
        <Product
          title="El Elegante"
          price={20000}
          description="Alguna cajita de macarons bien sabrosa"
          img="holi.jpg"
          id="1"
        ></Product>{" "}
        <Product
          title="El Alegre"
          price={20000}
          description="Alguna cajita de macarons bien sabrosa"
          img="como.jpg"
          id="2"
        ></Product>{" "}
        <Product
          title="El fresco"
          price={20000}
          description="Alguna cajita de macarons bien sabrosa"
          img="estas.jpg"
          id="3"
        ></Product>
        <Product
          title="El Ligero"
          price={20000}
          description="Alguna cajita de macarons bien sabrosa"
          img="bien.jpg"
          id="4"
        ></Product>
      </div>
      <div className="banner">
        <img src="/images/como.jpg" alt="" />
        <div className="banner-info">
          <h1>Conoce más de nuestras emociones</h1>
          <p>Un viaje al centro de la tierra</p>
          <Link to="/tienda">
            <button>Nuestros Macarons</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
