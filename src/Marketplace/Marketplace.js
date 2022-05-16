import React from "react";
import Product from "../Product";
import "./marketplace.scss";

import SwiperCore, {
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    Autoplay,
    EffectFade,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { products } from "../macarons";
//import swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";


SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade]);
const slides = ["petit1.jpg", "petit2.jpg", "petit3.jpg", "petit4.jpg"];


const Marketplace = () => {
    return (
        <div className="marketplace">
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
            <h1 className="title">NUESTROS PRODUCTOS</h1>
            <div className="products">
                {products.map((item) => (
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

export default Marketplace