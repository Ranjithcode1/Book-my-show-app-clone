import React, { useState } from "react";
import HeroSlider from "react-slick";

//Arrow component
import { NextArrow, PrevArrow } from "./Arrows.component";

const HeroCarousel = () => {
  const [images, setImages] = useState([
    "https://in.bmscdn.com/promotions/cms/creatives/1629830049996_celebfiecruisewiththestarsrevised_webshowcase_1240x300_24aug.jpg",
    "https://in.bmscdn.com/promotions/cms/creatives/1628591224466_fnbgeneric.jpg",
    "https://in.bmscdn.com/promotions/cms/creatives/1630996503860_moviethailavi_tamil_incinemasthisfridayknowmore_webshowcase_1240x300.jpg",
  ]);

  const settingsLg = {
    arrows: true,
    dots: true,
    autoplay: true,
    centerMode: true,
    centerPadding: "200px",
    slidesToShow: 1,
    infinite: true,
    slideToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const settings = {
    arrows: true,
    centerMode: true,
    centerPadding: "10px",
    slidesToShow: 1,
    infinite: true,
    speed: 500,
    slideToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <>
      <div className="lg:hidden">
        <HeroSlider {...settings}>
          {images.map((image) => (
            <div className="w-full h-56 md:h-80 py-3">
              <img
                src={image}
                alt="Hero Banner"
                className="w-full h-full object-center rounded-md "
              />
            </div>
          ))}
        </HeroSlider>
      </div>
      <div className="hidden lg:block ">
        <HeroSlider {...settingsLg}>
          {images.map((image) => (
            <div className="w-full h-96  px-2 py-3">
              <img
                src={image}
                alt="hero Banner"
                className="w-full h-full rounded-md object-center"
              />
            </div>
          ))}
        </HeroSlider>
      </div>
    </>
  );
};

export default HeroCarousel;
