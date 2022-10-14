import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";


export default function UnsplashSwiper({swiper}) {
    if( swiper.length !== 0 ){
        return (
            <>
              <Swiper
                slidesPerView={5}
                spaceBetween={10}
                loop={true}
                autoplay={
                    {delay: 3000,
                    disableOnInteraction: false}
                }
                modules={[Autoplay]}
                className="mySwiper"
              >
                <SwiperSlide><a href={`https://unsplash.com/photos/${swiper[0].id}`}>
                <img src={swiper[0].urls.regular} alt={swiper[0].id} /></a></SwiperSlide>
                <SwiperSlide><a href={`https://unsplash.com/photos/${swiper[1].id}`}>
                <img src={swiper[1].urls.regular} alt={swiper[1].id} /></a></SwiperSlide>
                <SwiperSlide><a href={`https://unsplash.com/photos/${swiper[2].id}`}>
                <img src={swiper[2].urls.regular} alt={swiper[2].id} /></a></SwiperSlide>
                <SwiperSlide><a href={`https://unsplash.com/photos/${swiper[3].id}`}>
                <img src={swiper[3].urls.regular} alt={swiper[3].id} /></a></SwiperSlide>
                <SwiperSlide><a href={`https://unsplash.com/photos/${swiper[4].id}`}>
                <img src={swiper[4].urls.regular} alt={swiper[4].id} /></a></SwiperSlide>
                <SwiperSlide><a href={`https://unsplash.com/photos/${swiper[5].id}`}>
                <img src={swiper[5].urls.regular} alt={swiper[5].id} /></a></SwiperSlide>
                <SwiperSlide><a href={`https://unsplash.com/photos/${swiper[6].id}`}>
                <img src={swiper[6].urls.regular} alt={swiper[6].id} /></a></SwiperSlide>
                <SwiperSlide><a href={`https://unsplash.com/photos/${swiper[7].id}`}>
                <img src={swiper[7].urls.regular} alt={swiper[7].id} /></a></SwiperSlide>
                <SwiperSlide><a href={`https://unsplash.com/photos/${swiper[8].id}`}>
                <img src={swiper[8].urls.regular} alt={swiper[8].id} /></a></SwiperSlide>
              </Swiper>
            </>
          );
    }

  
}
