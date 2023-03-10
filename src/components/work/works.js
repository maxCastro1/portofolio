import React , {useState,useEffect} from "react";
import { projectsData, projectsNav } from "./data";
import WorksItems from "./worksItems";
const Works = () => {
    const [item, setItem] = useState({name: 'All'});
    const [projects, setProjects ] = useState([]);
    const [active, setActive ] = useState(0);

    useEffect(()=>{
        if(item.name === "All"){
            setProjects(projectsData)
        }
        else{
            const newProjects = projectsData.filter((project) => {
                return project.category === item.name
            })
            setProjects(newProjects)
        }
    },[item])

    const handleClick = (e,index) => {
        e.preventDefault()
        setItem({ name:e.target.textContent });
        setActive(index)
    }
    return (
        <>
            <div className="work__filters">
                {projectsNav.map((item, index) => {
                    return (
                        <button 
                        className={`${active === index ? 'active-work' : '' } work__item` }
                        key={index}
                        onClick={(e) =>{
                            handleClick(e, index);
                        }}
                        >
                        {item.name}
                        </button>
                    )
                })}
            </div>
            <div className="work__container container grid">
                {projects.map((item) => {
                    return(
                        <WorksItems item={item} key={item.id}/>
                    )
                })}
            </div>
        </>

    )
}
export default Works;