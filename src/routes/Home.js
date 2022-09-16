import React from 'react'
import Navbar from "../components/Navbar";
import Frontpage from "../components/Frontpage";
import Work from "../components/Work";
import Footer from "../components/Footer";



const Home = () => {
  return <div>
    <Navbar/>
    <Frontpage/>
    <Work/>
    <Footer/>
  </div>;
};

export default Home