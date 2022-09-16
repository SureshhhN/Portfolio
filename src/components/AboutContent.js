import "./AboutContent.css"

import React from 'react'
import { Link } from "react-router-dom"

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I ?</h1>
            <p>Im a React Front-end Developer. I create responsive secure websites for my clients.</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>

        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src="https://www.syncfusion.com/blogs/wp-content/uploads/2020/07/Top-6-Front-End-Web-Development-Tools-to-Increase-Your-Productivity-in-2020-1.jpg" className="img"/>
                </div>

                <div className="img-stack bottom">
                    <img src="https://www.syncfusion.com/blogs/wp-content/uploads/2020/07/Top-6-Front-End-Web-Development-Tools-to-Increase-Your-Productivity-in-2020-1.jpg" className="img"/>
                </div>
            </div>
        </div>
    </div>
  )
}



export default AboutContent



