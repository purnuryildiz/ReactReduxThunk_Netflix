import React from "react";
import Hero from "./Hero";
import { useSelector } from "react-redux";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import MovieList from "./MovieList";

const index = () => {
  const { isLoading, error, genres } = useSelector((store) => store.genres);

  return (
    <div>
      <Hero />
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error info={error} />
      ) : (
        genres && genres.map((cat) => <MovieList key={genres.id} genre={cat} />)
      )}
    </div>
  );
};

export default index;
