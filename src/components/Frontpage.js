import "./Frontpage.css";

import React from 'react'
import IntroImg from "../assets/intro-bg.jpg";
import { Link } from "react-router-dom";

const Frontpage = () => {
  return (
    <div className="front" >
    <div className="bgfront" >
        <img className="intro-img" src= {IntroImg} alt= "IntroImg"/>
    </div>
    <div className="content">
        <p>HI, I'M SURESH...</p>
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