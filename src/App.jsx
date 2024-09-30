import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Favourites from "./pages/Favourites";
import Header from "./components/Header";
import Detail from "./pages/Detail";
import { useDispatch } from "react-redux";
import { getGenres } from "./redux/actions/index";
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGenres());
  }, []);
  return (
    <BrowserRouter>
      <div className="p-5 md:p-10 lg:px-15 xl:px-20 ">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<Detail />} />

          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
