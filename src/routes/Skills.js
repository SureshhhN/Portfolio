import React from 'react'
import Navbar from "../components/Navbar";

import Skill from '../components/Skill';
import Projectpage from '../components/Projectpage';

import Footer from "../components/Footer";



const Skills = () => {
  return <div>
    <Navbar/>
    <Projectpage heading= "SKILLS" text="The Technical Skills I Have..."/>
    <Skill/>
    <Footer/>
  </div>;
};

export default Skills