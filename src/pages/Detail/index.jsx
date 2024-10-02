import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../../utils/api";
import Error from "../../components/Error";
import Loader from "../../components/Loader";
import Banner from "./Banner";
import Content from "./Content";
import ActorList from "./ActorList";
import VideoList from "./VideoList";
import Button from "./Button";

const index = () => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const params = {
      append_to_response: "credits,videos,smilar,reviews",
    };
    api
      .get(`/movie/${id}`, { params })
      .then((res) => setMovie(res.data))
      .catch((err) => setError(err.message));
  }, [id]);

  if (error) return <Error info={error} />;
  if (!movie) return <Loader />;

  return (
    <div>
      {/* İzleme listesi butonu */}
      <Button movie={movie} />
      {/* üst resim  alanı */}
      <Banner movie={movie} />
      <Content movie={movie} />
      {/* oyuncu listesi */}
      <ActorList actors={movie.credits.cast} crews={movie.credits.crew} />
      {/* Fragman Listesi */}
      <VideoList videos={movie.videos.results} />
    </div>
  );
};

export default index;
