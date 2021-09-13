import React from "react";

//HOC
import DefaultHOC from "./HOC/DefaultHOC";
import MovieHOC from "./HOC/Movie.HOC";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Pages
import HomePage from "./Pages/Home.Page";
import MoviePage from "./Pages/Movie.Page";



function App() {
  return (
    <>
      <DefaultHOC path="/" exact component={HomePage} />
      <MovieHOC  path="/movie/:id" exact component={MoviePage} />
    </>
  );
}

export default App;
