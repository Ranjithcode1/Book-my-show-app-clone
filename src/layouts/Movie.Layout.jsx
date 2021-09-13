import React from "react";
import MovieNavebar from "../components/Navbar/MovieNavBar.component";




const MovieLayout = (props) => {
    return(
        <div>
            <MovieNavebar/>
            {props.children}
            <div>Footer</div>
        </div>
    )
}

export default MovieLayout;