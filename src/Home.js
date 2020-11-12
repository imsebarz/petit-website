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
  EffectFade,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import Footer from "./Components/Footer";
import { preferidos } from "./macarons";
import InfoSquare from "./Components/InfoSquare";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade]);

const Home = () => {
  const slides = [
    "https://images.unsplash.com/photo-1513870931673-fa0ab3de2e09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    "https://images.unsplash.com/photo-1531594652722-292a43e752b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80",
    "https://images.unsplash.com/photo-1568926728897-5e20b503dc20?ixlib=rb-1.2.1&auto=format&fit=crop&w=748&q=80",
    "https://images.unsplash.com/photo-1570476922354-81227cdbb76c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80",
  ];

  return (
    <div className="home">
      <div className="home-container">
        <img
          className="logo"
          src="/images/logo.png"
          alt="Logo de Petit Macarons"
        />
        <Swiper
          slidesPerView={1}
          effect="fade"
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          loop={true}
        >
          {slides.map((it) => (
            <SwiperSlide>
              <img src={it} alt="Caja de Macarons" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <h1 className="title">LOS PREFERIDOS</h1>
      <div className="row">
        {preferidos.map((item) => (
          <Product
            title={item.name}
            price={item.price}
            description={item.description}
            img={item.img}
            id={item.id}
          ></Product>
        ))}
      </div>
      <div className="gallery">
        <img src="/images/coffee.png" alt="Macarons with Coffee" />
        <img src="/images/motion.gif" alt="Motion Graphics Macarons" />
        <img src="/images/influencer.jpg" alt="Greicy Rendón con Macarons" />
      </div>
      <div className="banner">
        <img src="/images/como.jpg" alt="Macarons" />
        <div className="banner-info">
          <h1>Dale color a tu personalidad</h1>
          <p>#SOYCOLOR</p>
          <Link to="/tienda">
            <button>Nuestros Macarons</button>
          </Link>
        </div>
      </div>
      <InfoSquare
        title1="Conoce más de Petit Macarons"
        text1={
          <Link to="/aboutus/ofrecemos">
            <button>Acerca de nostros</button>
          </Link>
        }
        side="rigth"
        image="relleno.gif"
      ></InfoSquare>
    </div>
  );
};

export default Home;
