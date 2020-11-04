import React from "react";
import "./Home.scss";
import Product from "./Product";
import { Link } from "react-router-dom";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const Home = () => {
  const slides = [
    "https://images.unsplash.com/photo-1513870931673-fa0ab3de2e09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    "https://images.unsplash.com/photo-1528975604071-b4dc52a2d18c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    "https://images.unsplash.com/photo-1568926728897-5e20b503dc20?ixlib=rb-1.2.1&auto=format&fit=crop&w=748&q=80",
    "https://images.unsplash.com/photo-1570476922354-81227cdbb76c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80",
  ];

  return (
    <div className="home">
      <div className="home-container">
        <img className="logo" src="/images/logo.png" alt="" />
        <Swiper
          // spaceBetween={50}
          slidesPerView={1}
          // navigation
          // pagination={{ clickable: true, color: "red" }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          loop={true}
          // scrollbar={{ draggable: true }}
        >
          {slides.map((it) => (
            <SwiperSlide>
              <img src={it} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <h1 className="title">LOS PREFERIDOS</h1>
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
