import React, {useState} from "react";
import "./header.css";
import { FaHome,FaScrewdriver,FaServicestack,FaUserTie} from "react-icons/fa";
import { HiDocumentText  } from "react-icons/hi";
import { GrClose,GrApps} from "react-icons/gr";
import { BiSend } from "react-icons/bi";

const Header = () => {
     
    window.addEventListener("scroll", function(){
        const header = document.querySelector(".header ")
        if(this.scrollY >= 80){
            header.classList.add("scroll-header")
        } 
        else {
            header.classList.remove("scroll-header")
        }
    })
    const [toggle,showMenu] = useState(false); 
    const [actineNav, setActiveNav] = useState("#home");
    return(
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav__logo" >Max</a>

                <div className={toggle ? "nav-menu show-menu " : "nav-menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home"  className={actineNav === "#home" ? "nav__link active-link": "nav__*link"}>
                                <FaHome className="nav__icon"/>Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about"  className={actineNav === "#about" ? "nav__link active-link": "nav__*link"} onClick={()=> setActiveNav("#about")}>
                                <FaUserTie className="nav__icon"/>About
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills"  className={actineNav === "#skills" ? "nav__link active-link": "nav__*link"} onClick={()=> setActiveNav("#skills")}>
                                <HiDocumentText  className="nav__icon"/>Skills
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#services"  className={actineNav === "#servskills" ? "nav__link active-link": "nav__*link"} onClick={()=> setActiveNav("#servskills")}>
                                <FaServicestack className="nav__icon"/>Services
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#qualification"  className={actineNav === "#qualification" ? "nav__link active-link": "nav__*link"} onClick={()=> setActiveNav("#qualification")}>
                                <FaScrewdriver className="nav__icon"/>Porfolio
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact"  className={actineNav === "#contact" ? "nav__link active-link": "nav__*link"} onClick={()=> setActiveNav("#contact")}>
                                <BiSend className="nav__icon"/>Contact
                            </a>
                        </li>
                    </ul>
                    <div  className="nav__close"  onClick={()=>{showMenu(false)}}>
                        <GrClose/>
                        </div>
                </div>
                <div className="nav__toggle" onClick={()=>{showMenu(true)}}>
                    <GrApps/>
                    </div>
            </nav>
        </header>
    )
}

export default Header