import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { EffectCoverflow,  } from "swiper";
import { Navigation, Pagination } from "swiper";

export default function MovieSwiper({swiper}) {
    if( swiper.length !== 0 ){
        return (
          <div class="movie_swiper">
              <Swiper
              
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={4}
                spaceBetween={10}
                loop={true}
                autoplay={
                  {delay: 3000,
                  disableOnInteraction: false}
                }
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }}
                navigation={true}
                pagination={{
                  clickable: true,
                }}
                modules={[Autoplay, EffectCoverflow, Navigation, Pagination]}
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
            </div>
          );
    }

  
}
