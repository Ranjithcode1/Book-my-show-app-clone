import React from "react";

const MovieInfo = ({ movie }) => {
  return (
    <>
      <div className="flex flex-col lg:gap-3 ">
        <h1 className="text-white lg:text-5xl font-bold">
          {movie.original_title}
        </h1>
        <div className=" text-white flex flex-col gap-5">
          <h4>4k ratings</h4>
          <h4>English, Hindi, Tamil. Telugu</h4>
          <h4>{movie.overview}</h4>
        </div>
        <div className="flex items-center gap-10 w-full my-8">
          <button className="bg-red-500 w-full py-3 text-white font-semibold rounded-lg ">
            Rent ₹149
          </button>
          <button className="bg-red-500 w-full py-3 text-white font-semibold rounded-lg ">
            Buy ₹599
          </button>
        </div>
      </div>
    </>
  );
};

export default MovieInfo;
