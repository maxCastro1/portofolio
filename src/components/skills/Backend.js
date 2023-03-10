import React from "react";
import { BiBadgeCheck } from "react-icons/bi";

const Backend = () => {
    return(
        <div className="skill__content">
        <h3 className="skills__title">Backend Developer</h3>

        <div className="skills__box">
            <div className="skills__group">

                <div className="skills__data">
                    <BiBadgeCheck className="skills__icon"/>

                    <div>
                        <h3 className="skills__name">NodeJS</h3>
                        <span className="skills__level">Advanced</span>
                    </div>
                </div>

                <div className="skills__data">
                    <BiBadgeCheck className="skills__icon"/>
                    
                    <div>
                        <h3 className="skills__name">Express&MongoDB</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>

                <div className="skills__data">
                    <BiBadgeCheck className="skills__icon"/>
                    
                    <div>
                        <h3 className="skills__name">Python</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>

                <div className="skills__data">
                    <BiBadgeCheck className="skills__icon"/>
                    
                    <div>
                        <h3 className="skills__name">MySQL</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>

                <div className="skills__data">
                    <BiBadgeCheck className="skills__icon"/>
                    
                    <div>
                        <h3 className="skills__name">Firebase</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>

                 
            </div>
        </div>

        
      </div>       
    )
}
export default Backend