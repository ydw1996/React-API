import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";


export default function YoutubeSwiper({swiper}) {
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
                <SwiperSlide><a href={`https://www.youtube.com/watch?v=${swiper[0].id}`}>
                <img src={`https://i.ytimg.com/vi/${swiper[0].id}/hqdefault.jpg`}
                alt={swiper[0].snippet.title}/><p>{swiper[0].snippet.title}</p></a></SwiperSlide>
                <SwiperSlide><a href={`https://www.youtube.com/watch?v=${swiper[1].id}`}>
                <img src={`https://i.ytimg.com/vi/${swiper[1].id}/hqdefault.jpg`}
                alt={swiper[1].snippet.title}/><p>{swiper[1].snippet.title}</p></a></SwiperSlide>
                <SwiperSlide><a href={`https://www.youtube.com/watch?v=${swiper[2].id}`}>
                <img src={`https://i.ytimg.com/vi/${swiper[2].id}/hqdefault.jpg`}
                alt={swiper[2].snippet.title}/><p>{swiper[2].snippet.title}</p></a></SwiperSlide>
                <SwiperSlide><a href={`https://www.youtube.com/watch?v=${swiper[3].id}`}>
                <img src={`https://i.ytimg.com/vi/${swiper[3].id}/hqdefault.jpg`}
                alt={swiper[3].snippet.title}/><p>{swiper[3].snippet.title}</p></a></SwiperSlide>
                <SwiperSlide><a href={`https://www.youtube.com/watch?v=${swiper[4].id}`}>
                <img src={`https://i.ytimg.com/vi/${swiper[4].id}/hqdefault.jpg`}
                alt={swiper[4].snippet.title}/><p>{swiper[4].snippet.title}</p></a></SwiperSlide>
                <SwiperSlide><a href={`https://www.youtube.com/watch?v=${swiper[5].id}`}>
                <img src={`https://i.ytimg.com/vi/${swiper[5].id}/hqdefault.jpg`}
                alt={swiper[5].snippet.title}/><p>{swiper[5].snippet.title}</p></a></SwiperSlide>
                <SwiperSlide><a href={`https://www.youtube.com/watch?v=${swiper[6].id}`}>
                <img src={`https://i.ytimg.com/vi/${swiper[6].id}/hqdefault.jpg`}
                alt={swiper[6].snippet.title}/><p>{swiper[6].snippet.title}</p></a></SwiperSlide>
                <SwiperSlide><a href={`https://www.youtube.com/watch?v=${swiper[7].id}`}>
                <img src={`https://i.ytimg.com/vi/${swiper[7].id}/hqdefault.jpg`}
                alt={swiper[7].snippet.title}/><p>{swiper[7].snippet.title}</p></a></SwiperSlide>
                <SwiperSlide><a href={`https://www.youtube.com/watch?v=${swiper[8].id}`}>
                <img src={`https://i.ytimg.com/vi/${swiper[8].id}/hqdefault.jpg`}
                alt={swiper[8].snippet.title}/><p>{swiper[8].snippet.title}</p></a></SwiperSlide>
              </Swiper>
            </>
          );
    }

  
}
