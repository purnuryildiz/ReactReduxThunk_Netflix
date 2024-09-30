import React from "react";
import { Link } from "react-router-dom";
const index = () => {
  return (
    <header className="mb-10">
      <Link to="/">
        <img src="/netflix_logo.svg" className="max-w-[150px] " />
      </Link>
    </header>
  );
};

export default index;
