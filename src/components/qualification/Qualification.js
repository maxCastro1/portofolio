import React ,{useState} from 'react';
import'./qualification.css';
import { GiDiploma } from "react-icons/gi";
import { BiBriefcaseAlt } from "react-icons/bi";
import { AiOutlineCalendar} from "react-icons/ai";
const Qualification = () => {

    
    const [toggleState,setToggleState] = useState(1)

    const toggleTab = (index) =>{
        setToggleState(index)
    }
    return (
        <section className="qualification__container section" id='qualification'>
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey</span>

            <div className={toggleState === 1 ? 'qualification__content-active qualification__active container':'qualification__content qualification__active container'}>
                <div className='qualification__tabs'>
                    <div className={toggleState === 1 ? 
                    'qualification__button qualification__active button--flex' : 
                    'qualification__button button--flex'} onClick={()=>toggleTab(1)}>
                        <GiDiploma className='qualification__icon'/>Education
                    </div>

                    <div className={toggleState === 2 ? 
                    'qualification__button qualification__active button--flex' : 
                    'qualification__button button--flex'} onClick={()=>toggleTab(2)}>
                        <BiBriefcaseAlt className='qualification__icon'/>Experience
                    </div>
                </div>

                <div className='qualification__sections'>
                    <div className={toggleState === 1 ? 
                        'qualification__content qualification__content-active' :
                        'qualification__content ' }>
                        <div className='qualification__data'>
                            <div>
                                <h3 className='qualification__title'>Computer SC</h3>
                                <span className='qualification__subtitle'>Rwanda - St paul</span>
                                <div className='qualification__calender'>
                                    <AiOutlineCalendar className='qualification__icon'/>2016 - 2018
                                </div>
                            </div>
                            <div>
                            <span className='qualification__rounder'></span>
                            <span className='qualification__line'></span>
                        </div>
                        </div>

                        <div className='qualification__data'>
                        <div></div>
                        <div>
                            <span className='qualification__rounder'></span>
                            <span className='qualification__line'></span>
                        </div>
                        
                            <div>
                                <h3 className='qualification__title'>Art</h3>
                                <span className='qualification__subtitle'>Rwanda - KIAC</span>
                                <div className='qualification__calender'>
                                <AiOutlineCalendar className='qualification__icon'/>2018 - 2019
                                </div>
                            </div>
                            <div>
                        </div>
                        </div>
                          
                        <div className='qualification__data'> 
                            <div>
                                <h3 className='qualification__title'>Bachelor in CS</h3>
                                <span className='qualification__subtitle'>Rwanda - Uok</span>
                                <div className='qualification__calender'>
                                <AiOutlineCalendar className='qualification__icon'/>2019 - 2022
                                </div>
                            </div>
                            <div>
                            <span className='qualification__rounder'></span>
                            <span className='qualification__line'></span>
                        </div>
                        </div>

                        <div className='qualification__data'>
                        <div></div>
                        <div>
                            <span className='qualification__rounder'></span>
                            <span className='qualification__line'></span>
                        </div>
                        
                            <div>
                                <h3 className='qualification__title'>Ui/UX Expert</h3>
                                <span className='qualification__subtitle'>Online - Scrimba</span>
                                <div className='qualification__calender'>
                                <AiOutlineCalendar className='qualification__icon'/>2021 - Present
                                </div>
                            </div>
                            <div>
                        </div>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className={toggleState === 2 ? 'qualification__content-active qualification__active container':'qualification__content qualification__active container'}>
                <div className='qualification__tabs'>
                    <div className={toggleState === 1 ? 
                    'qualification__button qualification__active button--flex' : 
                    'qualification__button button--flex'} onClick={()=>toggleTab(1)}>
                        <GiDiploma className='qualification__icon'/>Education
                    </div>

                    <div className={toggleState === 2 ? 
                    'qualification__button qualification__active button--flex' : 
                    'qualification__button button--flex'} onClick={()=>toggleTab(2)}>
                        <BiBriefcaseAlt className='qualification__icon'/>Experience
                    </div>
                </div>

                <div className='qualification__sections'>
                    <div className={toggleState === 2 ?'qualification__content-active' : 'qualification__content'}>
                       
                        <div className='qualification__data'>
                            <div>
                                <h3 className='qualification__title'>IT support</h3>
                                <span className='qualification__subtitle'>Rwanda - Embiz group ltd</span>
                                <div className='qualification__calender'>
                                <AiOutlineCalendar className='qualification__icon'/>2021 - 2022
                                </div>
                            </div>
                            <div>
                            <span className='qualification__rounder'></span>
                            <span className='qualification__line'></span>
                        </div>
                        </div>

                        <div className='qualification__data'>
                        <div></div>
                        <div>
                            <span className='qualification__rounder'></span>
                            <span className='qualification__line'></span>
                        </div>
                        
                            <div>
                                <h3 className='qualification__title'>Frontend developer</h3>
                                <span className='qualification__subtitle'>Rwanda - Juru Systems</span>
                                <div className='qualification__calender'>
                                <AiOutlineCalendar className='qualification__icon'/>2022 - 2022
                                </div>
                            </div>
                            <div>
                        </div>
                        </div>
                        <div className='qualification__data'> 
                        <div>
                                <h3 className='qualification__title'>Frelencer</h3>
                                <span className='qualification__subtitle'>Online - Upwork</span>
                                <div className='qualification__calender'>
                                <AiOutlineCalendar className='qualification__icon'/>2022 - Present
                                </div>
                            </div>
                            <div>
                            <span className='qualification__rounder'></span>
                            <span className='qualification__line'></span>
                        </div>
                        </div>
                  
                        
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Qualification
