import React from "react";
import Product from "./Product";
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
import { macarons } from "./macarons";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade]);

const slides = [
  "https://images.unsplash.com/photo-1513870931673-fa0ab3de2e09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
  "https://images.unsplash.com/photo-1531594652722-292a43e752b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80",
  "https://images.unsplash.com/photo-1568926728897-5e20b503dc20?ixlib=rb-1.2.1&auto=format&fit=crop&w=748&q=80",
  "https://images.unsplash.com/photo-1570476922354-81227cdbb76c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80",
];

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
            <img src={it} alt="Macarons" />
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
    </div>
  );
};

export default Store;
