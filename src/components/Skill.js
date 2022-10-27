import React from 'react'
import {Container, Row, Col} from "react-bootstrap"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./Skill.css"

import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import bootstrap from "../assets/bootstrap.png";
import react from "../assets/react.webp";
import mongodb from "../assets/mongodb.png";
import node from "../assets/node.png";
import exp from "../assets/exp.png";


const Skill = () => {
    const responsive = {
        superLargeDesktop: {

            breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return(
        <section className='skill' id="skills">
            <Container>
                <Row>
                    <Col>
                    <div className="skill-bx">
                        <h2>Skills</h2>
                        <p>I am a Full-Stack Developer<br></br>I have Good skill-set on Frontend development.</p>
                        
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className='item'>
                                <img src={html} alt="Image"/>
                                <h5>HTML</h5>
                            </div>

                            <div className='item'>
                                <img src={css} alt="Image"/>
                                <h5>CSS</h5>
                            </div>

                            <div className='item'>
                                <img src={js} alt="Image"/>
                                <h5>JAVA SCRIPT</h5>
                            </div>

                            <div className='item'>
                                <img src={bootstrap} alt="Image"/>
                                <h5>BootStrap</h5>
                            </div>

                            <div className='item'>
                                <img src={react} alt="Image"/>
                                <h5>React Js</h5>
                            </div>

                            <div className='item'>
                                <img src={mongodb} alt="Image"/>
                                <h5>MongoDB</h5>
                            </div>

                            <div className='item'>
                                <img src={node} alt="Image"/>
                                <h5>Node Js</h5>
                            </div>

                            <div className='item'>
                                <img src={exp} alt="Image"/>
                                <h5>Express Js</h5>
                            </div>
                        </Carousel>
                    </div>

                    </Col>
                </Row>
            </Container>
        </section>
      )
}

export default Skill