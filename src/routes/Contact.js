import React from 'react'

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Projectpage from '../components/Projectpage';
import Form from '../components/Form';

const Contact = () => {
  return (
    <div>
    <Navbar/>
    <Projectpage heading= "CONTACT" text= "Lets have a chat"  />
    <Form/>
    <Footer/>
    </div>
  )
}

export default Contact