import React from "react";
import ProductCard from "components/ProductCard";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Scrollbar} from "swiper/modules";
import "swiper/css/scrollbar";

const BestSellers = ({products}) => {
  return (
    <section className="best-sellers">
      <div className="title headline">
        <h3>BESTSELLERS</h3>
        <p>많은 분께 사랑받는 제품을 소개합니다.</p>
      </div>
      <Swiper
        className="inner"
        rewind={true}
        scrollbar={{
          hide: false,
        }}
        spaceBetween={5}
        centeredSlides={true}
        slidesPerView={"auto"}
        breakpoints={{
          768: {
            spaceBetween: 24,
            centeredSlides: false,
          },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Scrollbar]}
      >
        {products
          .filter((product) => product.isBest)
          .map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

export default BestSellers;
