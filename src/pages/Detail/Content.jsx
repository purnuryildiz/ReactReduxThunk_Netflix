import React from "react";

const Content = ({ movie }) => {
  console.log(movie);
  return (
    <div className="my-10  grid grid-cols-1 md:grid-cols-2 gap-10">
      <div>içerik 1 </div>
      <div>içerik-2</div>
    </div>
  );
};

export default Content;
