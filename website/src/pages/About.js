import React from 'react'
import Navbar from '../components/Navbar';
import img from "../images/images.png";

const About = () => {
  return (
    <>
    <Navbar/>
    <div className="home-content">
        <div className="content">
          <h1>Grow your bussiness with Software Sector</h1>
          <p>we are the talanted developer making websites</p>
          <button className="btn">Get Started</button>
        </div>
        <div className="image">
          <img src={img} style={{width:"96%"}} alt="photo" />
        </div>
      </div>
    </>
  );
};

export default About;