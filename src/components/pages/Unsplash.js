import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import Subtitle from "../layout/Subtitle";
import Contact from "../layout/Contact";
import UnsplashCont from "../includes/UnsplashCont";
import UnsplashSearch from "../includes/UnsplashSearch";
import UnsplashSwiper from "../includes/UnsplashSwiper";
import { useEffect, useState } from "react";

function Unsplash() {
  const [image, setImages] = useState([]);
  const [swiper, setSwiper] = useState([]);

  const search = (query) => {
    fetch(
      `https://api.unsplash.com/search/photos?query=${query}&client_id=jGbDbr4a56tzr3H7rOKt8zDwnzQ6Dv8eID5gzzL8t0s&per_page=30`
    )
      .then((response) => response.json())
      .then((result) => setImages(result.results))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    fetch(
      "https://api.unsplash.com/search/photos?query=Ocean&client_id=jGbDbr4a56tzr3H7rOKt8zDwnzQ6Dv8eID5gzzL8t0s&per_page=30"
    )
      .then((response) => response.json())
      .then((result) => setImages(result.results))
      .catch((error) => console.log("error", error));
    fetch(
        "https://api.unsplash.com/search/photos?query=new&client_id=jGbDbr4a56tzr3H7rOKt8zDwnzQ6Dv8eID5gzzL8t0s&per_page=30"
      )
        .then((response) => response.json())
        .then((result) => setSwiper(result.results))
        .catch((error) => console.log("error", error));  
  }, []);

  return (
    <>
      <Header />
      <Contents>
        <Title title={["Unsplash", "Api"]} />
        <Subtitle sub={["NEW IMAGE"]} />
        <UnsplashSwiper swiper={swiper} />
        <UnsplashSearch onSearch={search} />
        <UnsplashCont image={image} />
        <Contact />
      </Contents>
      <Footer />
    </>
  );
}

export default Unsplash;
