import React from "react";
import Product from "../Product";
import "./Store.scss";

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectFade,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { macarons, PRESENTACIONES } from "../macarons";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import InfoSquare from "../InfoSquare";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade]);

const slides = ["petit1.jpg", "petit2.jpg", "petit3.jpg", "petit4.jpg"];

const Store = () => {
  return (
    <div className="store">
      <Swiper
        // spaceBetween={50}
        slidesPerView={1}
        effect="fade"
        navigation
        pagination={{ clickable: true, color: "red" }}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        loop={true}
        scrollbar={{ draggable: true }}
      >
        {slides.map((it) => (
          <SwiperSlide>
            <img src={`/images/${it}`} alt="Macarons" />
          </SwiperSlide>
        ))}
      </Swiper>
      <h1 className="title">NUESTROS MACARONS</h1>
      <div className="products">
        {macarons.map((item) => (
          <Product
            title={item.name}
            price={item.price}
            description={item.description}
            img={item.img}
            id={item.id}
          ></Product>
        ))}
      </div>
      <InfoSquare
        title1="Para asignar el precio se tiene en cuenta distintos factores:"
        text1={
          <ol>
            <li>
              El costo de la producción: Producir un solo macaron tiene un costo
              muy bajo (aprox. $500) y más cuando se preparan masivamente.
            </li>
            <li>
              La competencia: al ser dulces considerados refinados, los macarons
              son vendidos a precios altos comparados con el valor de
              producirlos. Una caja de 5 macarons puede se vendido en más de
              $20.000 por la competencia. Sin embargo, Petit quiere tener un
              precio más asequible para los clientes.
            </li>
            <li>
              Empaquetamiento: Petit ofrece 3 presentaciones en cajas, entre más
              grande sea la caja (con más cantidad de Macarons) sale más
              económico el precio.
            </li>
          </ol>
        }
        text2="A partir de los anteriores factores, teniendo en cuenta todos los costes de producción (ingredientes, cajas, servicios publicos) y pensando también la clase a la que va dirigida el producto, establecimos los siguientes precios:"
        side="rigth"
      ></InfoSquare>
      <h1 className="title">NUESTRAS PRESENTACIONES</h1>
      <div className="products">
        {PRESENTACIONES.map((item) => (
          <Product
            title={item.name}
            price={item.price}
            description={item.description}
            img={item.img}
            id={item.id}
          ></Product>
        ))}
      </div>
      <div className="producto">
        <h1 className="title">Ajustes de precios</h1>
        <h2>Promoción y Bonificación</h2>
        <p>
          Las cajas de petit están hechas en material amigable para el medio
          ambiente y están diseñadas para que el cliente las reutilice. Si lleva
          su caja en la siguiente compra, obtiene un 10% de descuento en su
          pedido.
        </p>
        <p>
          - Al presentar tarjeta de estudiante recibes un 10% de descuento en
          macarons y café.
        </p>
        <em>Aplica solamente en tiendas físicas</em>
      </div>
    </div>
  );
};

export default Store;
