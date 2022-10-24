import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import Subtitle from "../layout/Subtitle";
import Contact from "../layout/Contact";
import YoutubeCont from "../includes/YoutubeCont";
import YoutubeSearch from "../includes/YoutubeSearch";
import YoutubeSwiper from "../includes/YoutubeSwiper";
import React, { useEffect, useState } from "react";

function Youtube() {
  const [youtubes, setYoutubes] = useState([]);
  const [swiper, setSwiper] = useState([]);

  const search = (query) => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=AIzaSyA1HrDD8hqYby5sXWjNvg89AjmmppVNbRI&maxResults=28&type=video`
    )
      .then((response) => response.json())
      .then((result) => setYoutubes(result.items))
      .catch((error) => console.log("error", error));
  };
  useEffect(() => {
    fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=popsong&key=AIzaSyA1HrDD8hqYby5sXWjNvg89AjmmppVNbRI&maxResults=28&type=video"
    )
      .then((response) => response.json())
      .then((result) => setYoutubes(result.items))
      .catch((error) => console.log("error", error));
    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=KR&maxResults=25&key=AIzaSyCiFhVoDTSh6qtaySYS0Ji5U7BgB3Cdf_s"
    )
      .then((response) => response.json())
      .then((result) => setSwiper(result.items))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <Header />
      <Contents>
        <Title title={["Youtube", "Api"]} />
        <Subtitle sub={["TOP10 Youtube"]} />
        <YoutubeSwiper swiper={swiper} />
        <YoutubeSearch onSearch={search} />
        <YoutubeCont youtubes={youtubes} />
        <Contact />
      </Contents>
      <Footer />
    </>
  );
}

export default Youtube;
