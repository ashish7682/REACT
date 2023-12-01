// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

//**************************MINI PROJECT1*******************************//

/*import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

let curDate =new Date();
curDate=curDate.getHours();
let greeting="";
const cssStyle={};

if(curDate>=1 && curDate<12)
{
  greeting="Good Morning";
  cssStyle.color="green";
}else if(curDate>=12 && curDate<19)
{
  greeting="Good Afternoon";
  cssStyle.color="Orange";
}
else
{
  greeting="Good Night";
  cssStyle.color="Black";
}

ReactDOM.render(
  <>
  <div>
  <h1>Hello Sir ,<span style={cssStyle}>{greeting}</span></h1>
  </div>
  </>,

document.getElementById("root")

);..............*/

/*****************COMPONENT IN JS************************* */


/*import React from 'react';
import ReactDOM from 'react-dom';
import myfav ,{favprog,myName,myNames}from './App';*/


/*ReactDOM.render(
  <>
  <App/>
  </>,
  document.getElementById("root")
);*/

/*ReactDOM.render(
  <>
  <ol>
    <li>Thapa</li>
    <li>{myfav}</li>
    <li>{favprog}</li>
    <li>{myName()}</li>
    <li>{myNames()}</li>
  </ol>
  </>,
  document.getElementById("root")
);*/

/***********************CALCULATOR USING COMPONENT IN REACT*********************/

/*import  React  from 'react';
import  ReactDOM  from 'react-dom';
import  App from './App';

ReactDOM.render(
  <>
  <App/>
  </>,
       document.getElementById("root")

);*/
//*************************PROPS(Properties)********************** */
import  React  from 'react';
import  ReactDOM  from 'react-dom';
import  Dark from './Images/Dark.jpg';
import  Money from './Images/Money.jpg';
import  Mirzapur from './Images/Mirzapur.jpg';
import  Card  from './Card';
import  "./index.css";
import  Sdata from "./Sdata";

  


/*function ncard(val)
{
  return(
    <Card 
    title={val.sname}
    imgsrc={val.imgsrc}
    sname={val.title}
    links= {val.links}
    />
  );
}*/


ReactDOM.render(
  <>
  <h1>List of top 6 Netfix Series</h1>
<div className='main'>
  <div className='cards'>
    {Sdata.map(function ncard(val,index){
      
      return(
        <Card 
        
        key={val.id}
        title={val.sname}
        imgsrc={val.imgsrc}
        sname={val.title}
        links= {val.links}
        />
      );
    })}
  </div>
  
  </div>
  </>,
  document.getElementById("root")
);
