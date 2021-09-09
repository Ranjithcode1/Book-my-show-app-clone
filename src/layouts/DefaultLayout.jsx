import React from "react";
import Navbar from "../components/Navbar/Navbar.component";
import HeroCarousel from "../components/HeroCarousel/Herocarousel.component";
import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCard.component";



const DefaultLayout = (props) => {
    return(
        <div>
            <Navbar/>
            <HeroCarousel/>
            <EntertainmentCardSlider/>
            {props.children}
            <div>Footer</div>
        </div>
    )
}

export default DefaultLayout;