import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {GoStarFill} from "react-icons/go";
import {Autoplay} from "swiper/modules";

const Reviews = ({reviews}) => {
  return (
    <section className="reviews">
      <Swiper
        className="inner"
        loop={true}
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 4,
          },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="stars">
              <GoStarFill />
              <GoStarFill />
              <GoStarFill />
              <GoStarFill />
              <GoStarFill />
            </div>
            <p className="text">{review.content}</p>
            <span>{review.author}</span>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Reviews;
