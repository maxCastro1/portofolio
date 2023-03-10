import React from "react";
import { BsArrowUpShort } from "react-icons/bs";
import './scrollup.css'

const ScrollUp = () => {
 
    window.addEventListener("scroll", function(){
        const scrollUp = document.querySelector(".scrollup")
        if(this.scrollY >= 560){
            scrollUp.classList.add("show-scroll")
        } 
        else {
            scrollUp.classList.remove("show-scroll")
        }
    })
    return (
        
        <a href="#home" className="scrollup">
           <BsArrowUpShort className="scrollup__icon" />
        </a>
    )
}
export default ScrollUp 