import "./Frontpage.css";

import React from 'react'
import IntroImg from "../assets/intro-bg.jpg";
import { Link } from "react-router-dom";

import {FaGithub, FaArrowCircleDown} from "react-icons/fa"


const Frontpage = () => {
  return (
    <div className="front" >
    <div className="bgfront" >
        <img className="intro-img" src= {IntroImg} alt= "IntroImg"/>
    </div>
    <div className="content">
    <span>
        
        <p>HI, I'M SURESH...
          <a href="https://github.com/SureshhhN?tab=repositories" target="_blank"><FaGithub size={30} style={{color: "yellow", marginRight: "0.5rem"}}/></a>
          <a href="https://drive.google.com/file/d/19VwNAmwEAcF50D-3UroA1CQmPTkmTXu-/view?usp=sharing" target= "_blank"><FaArrowCircleDown size={30} style={{color: "yellow", marginRight: "1rem"}} /></a>

        </p> 
      
    </span>

        <h1>Full Stack Developer.</h1>

     <div>
        <Link to="/project" className="btn">Projects</Link>

        <Link to="/contact" className="btn btn-light">Contact</Link>
        
        </div>   
    </div>
    </div>
  )
}

export default Frontpage