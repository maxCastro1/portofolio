import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const WorksItems = ({item}) => {
    const {image,title,url} = item
    return(
     <div className="work__card" >
        <img src={image} alt="" className="work__img" />
        <h3 className="'work__title">{title}</h3>
        <a href={url} className="work__button">
            Demo <IoIosArrowRoundForward className="work__button-icon"/>
        </a>

     </div>   
    )
}
export default WorksItems