import React from "react";

const index = ({ info }) => {
  return (
    <div className="text-center flex flex-col gap-5 my-5">
      <h2> Sorry , something is wrong:( </h2>
      <p>{info} </p>
    </div>
  );
};

export default index;
