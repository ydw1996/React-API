import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import Subtitle from "../layout/Subtitle";
import Contact from "../layout/Contact";
import MovieCont from "../includes/MovieCont";
import MovieSearch from "../includes/MovieSearch";
import MovieSwiper from "../includes/MovieSwiper";
import { useEffect, useState } from "react";

function Movie() {
  const [movies, setMovies] = useState([]);
  const [swiper, setSwiper] = useState([]);

  const search = (query) => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=9278d13f704ad0fe53c2263b692efd89&query=${query}`
    )
      .then((response) => response.json())
      .then((result) => setMovies(result.results))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/search/movie?api_key=9278d13f704ad0fe53c2263b692efd89&query=marvel"
    )
      .then((response) => response.json())
      .then((result) => setMovies(result.results))
      .catch((error) => console.log("error", error));
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=9278d13f704ad0fe53c2263b692efd89"
    )
      .then((response) => response.json())
      .then((result) => setSwiper(result.results))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <Header />
      <Contents>
        <Title title={["Movie", "Api"]} />
        <Subtitle sub={["TOP9 Movie"]} />
        <MovieSwiper swiper={swiper} />
        <MovieSearch onSearch={search} />
        <MovieCont movies={movies} />
        <Contact />
      </Contents>
      <Footer />
    </>
  );
}

export default Movie;
