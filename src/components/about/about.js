import React from "react";
import Info from "./info";
import './about.css'
import { HiDocumentText  } from "react-icons/hi";
import pp from '../../images/profilePic.jpg'
import CV from '../../docs/Resume-Mizero-Maxime.pdf'
const About = () => {
    return (
        <section className="about section" id="about">
            <h2 className="section__title">About Me</h2>
            <span className="section__subtitle">My introduction</span>
            <div className="about__container container grid">
                <img alt = 'profile' src={pp} className="about__img" />
                <div className="about__data">
                    <Info />
                    <p className="about__description">
                    Front End Developer with five years of experience delivering exceptional customer experiences using JavaScript, HTML/CSS. Adapt to working in a highly collaborative workplace, solving problems, and insure customer satisfaction.
                    </p>
                    {/* href={CV} after import */}
                    <a href={CV} className="button button--flex">Download Cv  <HiDocumentText  className="nav__icon"/></a>
                </div>
            </div>
        </section>
    )
}

export default About