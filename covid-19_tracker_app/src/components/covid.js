import React, { useEffect, useState } from "react";
import "../components/covid.css";

const Covid = () => {

  const [items,setItems]= useState({}) ;
  const getCovidData = async () => {
    try {
      const res = await fetch(
        "https://data.covid19india.org/v4/min/data.min.json"
      );
      const actualData = await res.json();
      //   console.log(Object.entries(actualData.OR.total));
      //    console.log(actualData);
        const data = actualData.OR.total;
        setItems (data);
        console.log(data);
    } catch (err) {
      console.log(err);
    }
    // fetch("https://data.covid19india.org/v4/min/data.min.json");
  };

  useEffect(() => {
    getCovidData();
  }, []);
// console.log(items.tested);
  return (
    <>
      <section>
        <h1>🔴 LIVE</h1>
        <h2>COVID-19 CORONAVIRUS TRACKER</h2>

        <ul>
          <li className="card" >
            <div className="card_main" style={{backgroundColor:"blue",color:"white"}}>
              <div className="card_inner">
                <p className="card_name">
                  {" "}
                  <span> OUR </span> STATE{" "}
                </p>
                <p className="card_total card_small">ODISHA</p>
              </div>
            </div>
          </li>
          <li className="card">
             <div className="card_main" style={{backgroundColor:"green",color:"white"}}>
              <div className="card_inner">
                <p className="card_name">
                  {" "}
                  <span> OUR </span> STATE{" "}
                </p>
                <p className="card_total card_small">{items.recovered}</p>
              </div>
            </div>
          </li><li className="card">
             <div className="card_main" style={{backgroundColor:"yellow-green",color:"white"}}>
              <div className="card_inner">
                <p className="card_name">
                  {" "}
                  <span> OUR </span> STATE{" "}
                </p>
                <p className="card_total card_small"> {items.tested} </p>
              </div>
            </div>
          </li><li className="card">
             <div className="card_main" style={{backgroundColor:"orange",color:"white"}}>
              <div className="card_inner">
                <p className="card_name">
                  {" "}
                  <span> OUR </span> STATE{" "}
                </p>
                <p className="card_total card_small"> {items.confirmed} </p>
              </div>
            </div>
          </li><li className="card">
             <div className="card_main" style={{backgroundColor:"red",color:"white"}}>
              <div className="card_inner">
                <p className="card_name">
                  {" "}
                  <span> OUR </span> STATE{" "}
                </p>
                <p className="card_total card_small">  {items.deceased} </p>
              </div>
            </div>
          </li><li className="card">
             <div className="card_main" style={{backgroundColor:"brown",color:"white"}}>
              <div className="card_inner">
                <p className="card_name">
                  {" "}
                  <span> OUR </span> STATE{" "}
                </p>
                <p className="card_total card_small">  {items.vaccinated1} </p>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Covid;
