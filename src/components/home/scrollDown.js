import React from "react";
import {HiArrowSmDown } from "react-icons/hi";

const ScrollDown = () => {
     return(
     <div className="home__scroll">
           <div className="scroll__container">
            <div className="scroll__toggle"></div>
        </div>
        <span className="home__scroll-name">Scroll Down</span>
        <HiArrowSmDown className="home__scroll-arrow"/>
     </div>
       
     )

}
export default ScrollDown;