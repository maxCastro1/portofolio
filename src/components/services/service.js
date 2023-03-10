import React, { useState } from "react";
import './service.css'
import { IoIosCheckmarkCircleOutline,IoIosArrowRoundForward,IoIosClose } from "react-icons/io";
import { FiEdit } from "react-icons/fi";
import { BsGrid1X2,BsCode } from "react-icons/bs";

const Service = () =>{

    const [toggleState,setToggleState] = useState(0)

    const toggleTab = (index) =>{
        setToggleState(index)
    }
    return(
        <section className="services section" id="services">
             <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What i offer</span>

            <div className="services__container container grid">
                <div className="services__content ">
                    <div>
                        <BsGrid1X2 className="services__icon" />
                        <h3 className="services__title">Product <br /> Designer</h3>
                    </div>
                    <span className="services__button" onClick={()=>toggleTab(1)}>View more <IoIosArrowRoundForward className="service__button-icon"/></span>
                    <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <IoIosClose className = "servics__modal-close"  onClick={()=>toggleTab(0)}/>
                        <h3 className="services__modal-title">Product <br /> Designer</h3>
                            <p className="services__modal-description">
                                Service with more than 3 years of experience.
                                providing quality work to client and companies.
                            </p>
                            <ul className="services_modal-services  grids grid">
                                 <li className="services__modal-service">
                                 <IoIosCheckmarkCircleOutline className="services__icon" />
                                    {/* icon className="services__modal-icon" */}
                                    <p className="services__modal-info">
                                        I develop User interface.
                                    </p>
                                 </li>

                                 <li className="services__modal-service">
                                 <IoIosCheckmarkCircleOutline className="services__icon" />
                                    {/* icon className="services__modal-icon" */}
                                    <p className="services__modal-info">
                                        Web page development.
                                    </p>
                                 </li> 

                                 <li className="services__modal-service">
                                 <IoIosCheckmarkCircleOutline className="services__icon" />
                                    {/* icon className="services__modal-icon" */}
                                    <p className="services__modal-info">
                                        I create ux element interactions.
                                    </p>
                                 </li>

                                 <li className="services__modal-service">
                                 <IoIosCheckmarkCircleOutline className="services__icon" />
                                    {/* icon className="services__modal-icon" */}
                                    <p className="services__modal-info">
                                       I position your company brand.
                                    </p>
                                 </li>

                                 <li className="services__modal-service">
                                 <IoIosCheckmarkCircleOutline className="services__icon" />
                                    {/* icon className="services__modal-icon" */}
                                    <p className="services__modal-info">
                                        Design and mockups of products for companies.
                                    </p>
                                 </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content ">
                    <div>
                        <BsCode className="services__icon" />
                        <h3 className="services__title">Ui/Ux <br /> Designer</h3>
                    </div>
                    <span className="services__button"  onClick={()=>toggleTab(2)}>View more <IoIosArrowRoundForward className="service__button-icon"/></span>
                   
                    <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                        <h3 className="services__modal-title">Ui/Ux <br /> Designer</h3>
                        <IoIosClose className = "servics__modal-close"   onClick={()=>toggleTab(0)}/>
                            <p className="services__modal-description">
                                Service with more than 3 years of experience.
                                providing quality work to client and companies.
                            </p>
                            <ul className="services_modal-services grids grid">
                                 <li className="services__modal-service">
                                 <IoIosCheckmarkCircleOutline className="services__icon" />
                                    {/* icon className="services__modal-icon" */}
                                    <p className="services__modal-info">
                                        I Conducting user research.
                                    </p>
                                 </li>

                                 <li className="services__modal-service">
                                 <IoIosCheckmarkCircleOutline className="services__icon" />
                                    {/* icon className="services__modal-icon" */}
                                    <p className="services__modal-info">
                                      I Determining the architecture info of a digital product
                                    </p>
                                 </li> 

                                 <li className="services__modal-service">
                                 <IoIosCheckmarkCircleOutline className="services__icon" />
                                    {/* icon className="services__modal-icon" */}
                                    <p className="services__modal-info">
                                        I conducting user testing.
                                    </p>
                                 </li>

                                 <li className="services__modal-service">
                                 <IoIosCheckmarkCircleOutline className="services__icon" />
                                    {/* icon className="services__modal-icon" */}
                                    <p className="services__modal-info">
                                     Designing user flows and wireframes.
                                    </p>
                                 </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content ">
                    <div>
                        <FiEdit className="services__icon" />
                        <h3 className="services__title">Visual <br /> Designer</h3>
                    </div>
                    <span className="services__button"  onClick={()=>toggleTab(3)}>View more <IoIosArrowRoundForward className="service__button-icon"/></span>
                    <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                        <h3 className="services__modal-title">Visual <br /> Designer</h3>
                        <IoIosClose className = "servics__modal-close"  onClick={()=>toggleTab(0)}/>
                            <p className="services__modal-description">
                                Service with more than 3 years of experience.
                                providing quality work to client and companies.
                            </p>
                            <ul className="services_modal-services grids grid ">
                                 <li className="services__modal-service">
                                 <IoIosCheckmarkCircleOutline className="services__icon" />
                                    <p className="services__modal-info">
                                        I establish the look and feel for various interfaces.
                                    </p>
                                 </li>

                                 <li className="services__modal-service">
                                 <IoIosCheckmarkCircleOutline className="services__icon" />
                                    <p className="services__modal-info">
                                        I provide images' source.
                                    </p>
                                 </li> 

                                 <li className="services__modal-service">
                                 <IoIosCheckmarkCircleOutline className="services__icon" />
                                    <p className="services__modal-info">
                                      I provide design user-centered interaction models.
                                    </p>
                                 </li>

                                 <li className="services__modal-service">
                                 <IoIosCheckmarkCircleOutline className="services__icon" />
                                    <p className="services__modal-info">
                                        Design and mockups of products for companies.
                                    </p>
                                 </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Service