import React from "react";
import { FaInstagram, FaDribbble, FaGithub } from "react-icons/fa";
const Social = () => {
    return (
        <div className="home__social">
            <a href="https://www.instagram.com/" target='_black'>
                <FaInstagram className="home_social-icon"  />
            </a>
            <a href="https://dribbble.com/"  target='_black'>
                <FaDribbble className="home_social-icon"/>
            </a>
            <a href="https://github.com/"  target='_black'>
                <FaGithub  className="home_social-icon"/>
            </a>
        </div>
    )
}
export default Social;