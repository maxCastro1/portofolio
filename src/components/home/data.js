import React from "react";
import { FaHandSpock ,FaLocationArrow} from "react-icons/fa";
 const Data = () => {
 return(
    <div className="home__data">
        <h1 className="home__title">Mizero Maxime 
        <FaHandSpock className="hand"/>
        </h1>
        <h3 className="home__subtitle">Web Developer</h3>
        <p className="home__description">
        I'm a creative designer who is passionate about his craft 
        and uses technology to make functional art that enables
        you to realize your creative visions.
        </p>
        {/* I am a designer who is passionate about his art and uses technology to create functional art to help you realize your dreams. */}
         <a href="#contact" className="button button--flex">Say Hello <FaLocationArrow className="button-icon"/></a>
         </div>
 )
}
export default Data