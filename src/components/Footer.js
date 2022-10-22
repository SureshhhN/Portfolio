import "./Footer.css"

import React from 'react'
import {FaHome, FaPhone, FaMailBulk, FaFacebook, FaInstagram, FaGithub, FaArrowCircleDown} from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
        <div className="location" >
            <FaHome size={20} style={{color: "white", marginRight: "2rem"}} />
          <div>
            <p>TRICHY, INDIA.</p>
          </div>
          </div>
          <div className="phone">
            <h4><FaPhone size={20} style={{color: "white", marginRight: "2rem"}} />+91 8838015615</h4>

          </div>

          <div className="email">
            <h4><FaMailBulk size={20} style={{color: "white", marginRight: "2rem"}} />sureshkrish55555@gmail.com</h4>

          </div>
        </div>

        <div className="right">
          <h4>About Me</h4>
          <p>This is me Suresh. Full Time Front-End Developer. I enjoy discussing new projects and design challenges.</p>
          <div className="social">

            <a href="#"><FaFacebook size={30} style={{color: "white", marginRight: "1rem"}} /></a>
            <a href="#"><FaInstagram size={30} style={{color: "white", marginRight: "1rem"}} /></a>
            <a href="https://github.com/SureshhhN?tab=repositories" target="_blank"><FaGithub size={30} style={{color: "white", marginRight: "1rem"}}/></a>
            <a href="https://drive.google.com/file/d/1TnYNUkxc2ee-HIwImzElGk8OJiNMZ5OB/view?usp=sharing" target= "_blank"><FaArrowCircleDown size={30} style={{color: "white", marginRight: "1rem"}} /></a>

          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Footer