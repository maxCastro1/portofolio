import React from "react";
import { BiBadgeCheck } from "react-icons/bi";


const Frontend = () => {
    return(
      <div className="skill__content">
        <h3 className="skills__title">Frontent developer</h3>

        <div className="skills__box">
            <div className="skills__group">

                <div className="skills__data">
                    <BiBadgeCheck className="skills__icon" />

                    <div>
                        <h3 className="skills__name">HTML</h3>
                        <span className="skills__level">Advanced</span>
                    </div>
                </div>

                <div className="skills__data">
                    <BiBadgeCheck className="skills__icon" />
                    
                    <div>
                        <h3 className="skills__name">CSS</h3>
                        <span className="skills__level">Advanced</span>
                    </div>
                </div>

                <div className="skills__data">
                    <BiBadgeCheck className="skills__icon" />
                    
                    <div>
                        <h3 className="skills__name">Boostrap</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>

                <div className="skills__data">
                    <BiBadgeCheck className="skills__icon" />
                    
                    <div>
                        <h3 className="skills__name">Git</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>

                <div className="skills__data">
                    <BiBadgeCheck className="skills__icon" />
                    
                    <div>
                        <h3 className="skills__name">ReactJS</h3>
                        <span className="skills__level">Advanced</span>
                    </div>
                </div>
                <div className="skills__data">
                    <BiBadgeCheck className="skills__icon" />  
                    <div>
                        <h3 className="skills__name">Tailwind</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
                <div className="skills__data">
                    <BiBadgeCheck className="skills__icon" />  
                    <div>
                        <h3 className="skills__name">NextJS</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
            </div>
        </div>

        
      </div>       
    )
}
export default Frontend