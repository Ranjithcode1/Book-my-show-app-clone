import React from "react";
import MovieHero from "../components/MovieHero/MovieHero.component";
import { FaCcVisa, FaCcApplePay } from "react-icons/fa";
import Slider from "react-slick";
import Cast from "../components/Cast/Cast.component";

const MoviePage = () => {
  const settingsCast = {
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const cast = [
    {
      profile_path:
        "https://in.bmscdn.com/iedb/artist/images/website/poster/large/vin-diesel-5007-22-12-2017-10-17-23.jpg",
      original_name: "vin Disel",
      character: "Dominic Toretto",
    },
    {
      profile_path:
        "https://in.bmscdn.com/iedb/artist/images/website/poster/large/john-cena-1021-24-03-2017-15-43-30.jpg",
      original_name: "vin Disel",
      character: "Dominic Toretto",
    },
    {
      profile_path:
        "https://in.bmscdn.com/iedb/artist/images/website/poster/large/tyrese-gibson-2671-24-03-2017-17-39-25.jpg",
      original_name: "vin Disel",
      character: "Dominic Toretto",
    },
    {
      profile_path:
        "https://in.bmscdn.com/iedb/artist/images/website/poster/large/nathalie-emmanuel-1055032-24-03-2017-16-16-15.jpg",
      original_name: "vin Disel",
      character: "Dominic Toretto",
    },
    {
      profile_path:
        "https://in.bmscdn.com/iedb/artist/images/website/poster/large/helen-mirren-808-24-03-2017-12-36-16.jpg",
      original_name: "vin Disel",
      character: "Dominic Toretto",
    },
    {
      profile_path:
        "https://in.bmscdn.com/iedb/artist/images/website/poster/large/michelle-rodriguez-1471-13-10-2017-03-57-20.jpg",
      original_name: "vin Disel",
      character: "Dominic Toretto",
    },
    {
      profile_path:
        "https://in.bmscdn.com/iedb/artist/images/website/poster/large/vin-diesel-5007-22-12-2017-10-17-23.jpg",
      original_name: "vin Disel",
      character: "Dominic Toretto",
    },
  ];
  return (
    <>
      <MovieHero />
      <div className="my-12 container px-4 lg:ml-20 lg:w-2/3">
        <div className="flex flex-col items-start gap-3">
          <h1 className="text-gray-800 font-bold text-2xl">About the movie</h1>
          <p>
            Dom`s peaceful life with his wife Letty and son Brian is shattered
            when Dom`s past catches up to him. The gang is up against the most
            skilled assassin and high-performance driver - his little brother
            Jakob.
          </p>
        </div>

        <div className="my-8">
          <hr />
        </div>
        <div className="my-8">
          <h2 className="text-gray-800 font-bold text-2xl  mb-3">
            Applicable offers
          </h2>
        </div>
        <div className="flex flex-col gap-3 lg:flex-row ">
          <div className="flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2  rounded-md">
            <div className="w-8 h-8">
              <FaCcVisa className="w-full h-full" />
            </div>
            <div className="flex flex-col items-start">
              <h3 className="text-gray-700 text-xl font-bold">
                Visa Stream Offer
              </h3>
              <p className="text-gray-600">
                Get 50% off upto INR 150 on all RuPay card* on BookMyShow
                Stream.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2  rounded-md">
            <div className="w-8 h-8">
              <FaCcApplePay className="w-full h-full" />
            </div>
            <div className="flex flex-col items-start">
              <h3 className="text-gray-700 text-xl font-bold">
                Apple Stream Offer
              </h3>
              <p className="text-gray-600">
                Get 50% off upto INR 250 on all Apple Pay* on BookMyShow Stream.
              </p>
            </div>
          </div>
        </div>
        <div className="my-8">
          <hr />
        </div>
        <div className="my-8">
          <h2 className="text-gray-800 font-bold text-2xl mb-4">
            Cast and Crew
          </h2>
          <Slider {...settingsCast}>
            {cast.map((castData) => (
              <Cast
                image={castData.profile_path}
                castName={castData.original_name}
                role={castData.character}
              />
            ))}
          </Slider>
        </div>
        <div className="my-8" >
          <hr/>
        </div>

      </div>
    </>
  );
};

export default MoviePage;
