import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../../utils/api";
import Error from "../../components/Error";
import Loader from "../../components/Loader";
import Banner from "./Banner";
import Content from "./Content";

const index = () => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const params = {
      append_to_response: "credits,videos,smilar,reviews",
    };
    api
      .get(`/movie/${id} `, { params })
      .then((res) => setMovie(res.data))
      .catch((err) => setError(err.message));
  }, []);

  if (error) return <Error info={message} />;
  if (!movie) return <Loader />;
  return (
    <div>
      {/* üst resim  alanı */}
      <Banner movie={movie} />
      <Content movie={movie} />
    </div>
  );
};

export default index;
