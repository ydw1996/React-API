import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";


export default function MovieSwiper({swiper}) {
    if( swiper.length !== 0 ){
        return (
            <>
              <Swiper
                slidesPerView={5}
                spaceBetween={12}
                loop={true}
                autoplay={
                    {delay: 3000,
                    disableOnInteraction: false}
                }
                modules={[Autoplay]}
                className="mySwiper"
              >
                <SwiperSlide><img src={`https://image.tmdb.org/t/p/w342${swiper[0].poster_path}`}></img></SwiperSlide>
                <SwiperSlide><img src={`https://image.tmdb.org/t/p/w342${swiper[1].poster_path}`}></img></SwiperSlide>
                <SwiperSlide><img src={`https://image.tmdb.org/t/p/w342${swiper[2].poster_path}`}></img></SwiperSlide>
                <SwiperSlide><img src={`https://image.tmdb.org/t/p/w342${swiper[3].poster_path}`}></img></SwiperSlide>
                <SwiperSlide><img src={`https://image.tmdb.org/t/p/w342${swiper[4].poster_path}`}></img></SwiperSlide>
                <SwiperSlide><img src={`https://image.tmdb.org/t/p/w342${swiper[5].poster_path}`}></img></SwiperSlide>
                <SwiperSlide><img src={`https://image.tmdb.org/t/p/w342${swiper[6].poster_path}`}></img></SwiperSlide>
                <SwiperSlide><img src={`https://image.tmdb.org/t/p/w342${swiper[7].poster_path}`}></img></SwiperSlide>
                <SwiperSlide><img src={`https://image.tmdb.org/t/p/w342${swiper[8].poster_path}`}></img></SwiperSlide>
              </Swiper>
            </>
          );
    }

  
}
