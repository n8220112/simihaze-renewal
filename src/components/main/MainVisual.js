import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";

const MainVisual = () => {
  return (
    <section className="main-visual" id="mainVisual">
      <Swiper
        loop={true}
        spaceBetween={0}
        slidesPerView={1}
        speed={1000}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <div className="text-box">
            <h3>July Exclusive</h3>
            <p>립 컬러 3개 구매 시 1개 무료</p>
            <span>shop now</span>
          </div>
          <video src="assets/videos/main-visual-1.mp4" autoPlay muted loop playsInline></video>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-box">
            <h3>OUR GIFT TO YOU</h3>
            <p>$60 이상 구매 시, 정품 BLEND & LINE 아이섀도우 브러시 증정</p>
            <span>more view</span>
          </div>
          <img src="assets/images/visuals/main-visual-1.webp" alt="메인비주얼이미지" />
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-box">
            <h3>New In</h3>
            <p>SUN FLUSH All-Over Face Tint</p>
            <span>more view</span>
          </div>
          <img src="assets/images/visuals/main-visual-2.webp" alt="메인비주얼이미지" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default MainVisual;
