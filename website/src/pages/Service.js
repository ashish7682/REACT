import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import "../styles/Home.css";
import Data from "../components/Data";

const Services = () => {
  return (
    <>
      <Navbar />
      <div className="service">
        <h2 style={{ textAlign: "center",paddingTop:"8px"}}>Our Services</h2>
        <div className="grid">
          {Data.map((arrEle, index) => {
            return (
              <Card
                key={index}
                image={arrEle.img1}
                text={arrEle.text}
                link={arrEle.link}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Services;
