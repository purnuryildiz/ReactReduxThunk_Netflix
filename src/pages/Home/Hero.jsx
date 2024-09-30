import React, { useEffect, useState } from "react";
import api from "../../utils/api";
import Error from "../../components/Error";
import Loader from "../../components/Loader";
import { baseImgUrl } from "../../utils/constants";
baseImgUrl;
const Hero = () => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    api
      .get("/movie/popular")
      .then((res) => {
        //filmler dizisi
        const movies = res.data.results;
        //dizinin uzunluğu kadar rastgele bi sayı seç
        const i = Math.floor(Math.random() * movies.length);
        // filmler dizisinden rastgele 1 eleman seç
        setMovie(movies[i]);
      })
      .catch((err) => setError(err.message));
  }, []);

  if (error) return <Error info={error} />;
  if (!movie) return <Loader />;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:max-h-[400] gap-5 mb-10  ">
      <div className="flex flex-col gap-6 items-center justify-center">
        <h1 className="text-3xl font-bold">{movie.title} </h1>
        <p className="text-start text-gray-300">{movie.overview} </p>
        <p className="flex  gap-2">
          <span>IMDB :</span>
          <span>{Math.floor(movie.vote_average)} </span>
        </p>
        <div className="flex gap-5">
          <button className="p-2 bg-red-600 rounded transition hover:bg-red-700">
            Watch Trailer
          </button>
          <button className="p-2 bg-blue-600 rounded transition hover:bg-blue-700">
            Add to list
          </button>
        </div>
      </div>

      <div>
        <img
          className=" drop-shadow-[0_0_80px_rgba(255,255,255,0.4)] my-4 object-contain rounded max-h-[300px] "
          src={baseImgUrl + movie.backdrop_path}
        />
      </div>
    </div>
  );
};

export default React.memo(Hero);
