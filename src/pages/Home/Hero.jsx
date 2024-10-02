import React, { useEffect, useState } from "react";
import api from "../../utils/api";
import Error from "../../components/Error";
import Loader from "../../components/Loader";
import { baseImgUrl } from "../../utils/constants";
import Button from "../Detail/Button";
import { Link } from "react-router-dom";

const Hero = () => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    api
      .get("/movie/popular")
      .then((res) => {
        const movies = res.data.results;
        const i = Math.floor(Math.random() * movies.length);
        setMovie(movies[i]);
      })
      .catch((err) => setError(err.message));
  }, []);

  if (error) return <Error info={error} />;
  if (!movie) return <Loader />;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:max-h-[400px] gap-5 mb-10">
      <div className="flex flex-col gap-6 items-center justify-center">
        <h1 className="text-3xl font-bold">{movie.title}</h1>
        <p className="text-start text-gray-300">{movie.overview}</p>
        <p className="flex gap-2">
          <span>IMDB :</span>
          <span>{movie.vote_average.toFixed(1)}</span>
        </p>
        <div className="flex gap-5">
          <Link
            to={`/movie/${movie.id}`}
            className="py-2 px-4 h-11 flex items-center bg-red-600 text-white rounded transition hover:bg-red-700 shadow-lg"
          >
            Watch Trailer
          </Link>
          <Button movie={movie} />
        </div>
      </div>

      <div>
        <img
          className="drop-shadow-[0_0_80px_rgba(255,255,255,0.4)] my-4 object-contain rounded max-h-[300px]"
          src={baseImgUrl + movie.backdrop_path}
          alt={movie.title}
          eklendi
        />
      </div>
    </div>
  );
};

export default React.memo(Hero);
