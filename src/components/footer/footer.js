import React from "react";
import './footer.css'
import { FaInstagramSquare,FaTwitterSquare,FaFacebookSquare } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Max</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>
                    <li>
                        <a href="#portfolio" className="footer__link">Projects</a>
                    </li>
                    <li>
                        <a href="#services" className="footer__link">Services</a>
                    </li>
                </ul>
                <div className="footer__social">
                    <a href="https://www.instagram.com/" target='_black'>
                        <FaInstagramSquare className="footer__social-link" />
                    </a>
                    <a href="https://facebook.com/" target='_black'>
                        <FaFacebookSquare className="footer__social-link" />
                    </a>
                    <a href="https://twitter.com/" target='_black'>
                        <FaTwitterSquare className="footer__social-link" />
                    </a>
                </div>
                <span className="footer__copy">
                    &#169; Mizero Maxime. All rights reserved
                </span>
            </div> 
        </footer>
    )
}
export default Footer