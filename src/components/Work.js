import  "./Projectcard.css"
import Projectcard from "./Projectcard"
import WorkCardData from "./WorkCardData"

import React from 'react'
import { NavLink } from "react-router-dom"

const Work = () => { 
  return (
    <div className="work-container">
     <h1 className="project-heading">Projects</h1>  
     <div className="project-container">
        {WorkCardData.map((val, ind) => {
            return(
               <Projectcard
               key={ind}
               imgsrc={val.imgsrc}
               title={val.title}
               view={val.view}
               source={val.source}
               /> 
            )
        })}
  
     </div> 
    </div>
  )
}

export default Work