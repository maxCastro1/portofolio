import React from "react";
import './skills.css'
import Frontend from "./frontend";
import Backend from "./Backend";
const Skill = () => {
    return(
        <section className="skills section" id="skills">
            <h2 className="section__title">skills</h2>
            <span className="section__subtitle">My techical level</span>

            <div className="skills__container container grid">
               <Frontend />
               <Backend />
            </div>
        </section>
    )
}

export default Skill