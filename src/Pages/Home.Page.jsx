/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";
import HeroCarousel from "../components/HeroCarousel/Herocarousel.component";
import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCard.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";

function HomePage() {
  const Recommendedmovies = [
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MThrIGxpa2Vz,ots-29,otc-FFFFFF,oy-612,ox-70/et00097273-jsjnrkupnh-portrait.jpg",
      title: "Fast and Furious 9 ",
      subtitle: "Action/Adventure/Fantasy",
    },
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NTAlICA5MDMgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00137405-hgayttvlqg-portrait.jpg",
      title: "Fast and Furious 9 ",
      subtitle: "Action/Adventure/Fantasy",
    },
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-N2sgbGlrZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00122449-cpycuxwnzs-portrait.jpg",
      title: "Fast and Furious 9 ",
      subtitle: "Action/Adventure/Fantasy",
    },
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTElICAyOGsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00122566-bgabnepvfd-portrait.jpg",
      title: "Fast and Furious 9 ",
      subtitle: "Action/Adventure/Fantasy",
    },
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzglICAxMmsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00056556-cmljhpnhcd-portrait.jpg",
      title: "Fast and Furious 9 ",
      subtitle: "Action/Adventure/Fantasy",
    },
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzklICAyNWsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00117102-gukaentnqs-portrait.jpg",
      title: "Fast and Furious 9 ",
      subtitle: "Action/Adventure/Fantasy",
    },
  ];
  const premieremovies = [
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00132338-brjalettes-portrait.jpg",
      title: "The Nest ",
      subtitle: "English",
    },
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00301282-dnzbnayacy-portrait.jpg",
      title: "The Nest ",
      subtitle: "English",
    },
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00312838-ddktmuquza-portrait.jpg",
      title: "The Nest ",
      subtitle: "English",
    },
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00311345-crxxxkjsxb-portrait.jpg",
      title: "The Nest ",
      subtitle: "English",
    },
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00122511-cbwsbnggyc-portrait.jpg",
      title: "The Nest ",
      subtitle: "English",
    },
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00122511-cbwsbnggyc-portrait.jpg",
      title: "The Nest ",
      subtitle: "English",
    },
  ];
  const OnlineStreamEvents = [
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxMCBTZXAgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00313611-xqqvejluju-portrait.jpg",
      title: "The Nest ",
      subtitle: "English",
    },
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VGh1LCAzMCBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00304009-nsnwqmxhqm-portrait.jpg",
      title: "The Nest ",
      subtitle: "English",
    },
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VGh1LCAzMCBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00304004-cpfnbdagcz-portrait.jpg",
      title: "The Nest ",
      subtitle: "English",
    },
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VGh1LCAzMCBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00304005-lnegmxafyd-portrait.jpg",
      title: "The Nest ",
      subtitle: "English",
    },
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VHVlLCAxNCBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00313022-ecbcdmnjgg-portrait.jpg",
      title: "The Nest ",
      subtitle: "English",
    },
    {
      src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxMCBTZXAgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00137587-rjbdnlgyda-portrait.jpg",
      title: "The Nest ",
      subtitle: "English",
    },
  ];
  return (
    <>
      <HeroCarousel />
      <div className="container mx-auto px-4 md:px-20 my-8 ">
        <h1 className="text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-8">
          The Best of Entertainment
        </h1>
        <EntertainmentCardSlider />
      </div>

      <div className="container mx-auto px-4 md:px-20 my-8">
        <PosterSlider
          title="Recommended Movies"
          subtitle="List of recommended movies"
          posters={Recommendedmovies}
          isDark={false}
        />
      </div>
      <div className="bg-Premiere-700 py-12">
        <div className="container mx-auto px-4 md:px-20 my-8 flex flex-col gap-3">
          <div className=" hidden md:flex ">
            <img
              src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
              alt="rupay"
              className="w-full h-full "
            />
          </div>
          <PosterSlider
          title="Premiere"
          subtitle="Watch new movies at home, every friday"
          posters={premieremovies}
          isDark={true}
        />
        </div>
        
      </div>
      <div className="container mx-auto px-4 md:px-20 my-8">
        <PosterSlider
          title="Online streaming events"
          subtitle=""
          posters={OnlineStreamEvents}
          isDark={false}
        />
      </div>

        
    </>
  );
}

export default HomePage;
