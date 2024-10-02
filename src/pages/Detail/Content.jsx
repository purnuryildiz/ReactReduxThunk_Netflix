import React from "react";
import List from "../Detail/List";

const Content = ({ movie }) => {
  return (
    <div className="my-10  grid grid-cols-1 md:grid-cols-2 gap-10">
      <div>
        <List title="Genres" arr={movie.genres} />
        <List title="Spoken Languages" arr={movie.spoken_languages} />
        <List title="Production Companies" arr={movie.production_companies} />
        <List title="Production Countries" arr={movie.production_countries} />
      </div>
      <div className="flex flex-col gap-2">
        <p>{movie.overview} </p>
        <p>
          <span>Budget: </span>
          <span className="font-semibold">
            ${new Intl.NumberFormat("en-US").format(movie.budget)}
          </span>
        </p>
        <p className="gap-2">
          <span>Revenue: </span>
          <span className="font-semibold">
            ${new Intl.NumberFormat("en-US").format(movie.revenue)}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Content;
