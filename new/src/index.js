// import React from 'react';
// import ReactDOM from 'react-dom/client';
// // import './index.css';
// import App from './App';
// // import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


/* Babel is JavaScript compiler

//1st Way:-

var React = require("react");
var ReactDOM= require("react-dom");-------->This can be written another way*/

/*import React from 'react';
import ReactDOM from 'react-dom';


ReactDOM.render(<h1> Hello World!!</h1>, document.getElementById("root"));

ReactDOM.render(
  React.createElement("h1",null,"Welcome React"),
  document.getElementById("root")
);

var h1=document.createElement("h1");
h1.innerHTML="It is Amazing";
document.getElementById("root").appendChild(h1);

//.........In Render method we can write only one element.......//
//.........To write multiple element within render method we can use div tag.......//

ReactDOM.render(
  <div>
    <h1>React is the library of JS</h1>
    <p>It is Awesome</p>
  </div>,
  document.getElementById("root1")
);

//In react v16 it is possible for render() to return an array of elements.

ReactDOM.render(
  [
    <h1>React is the library of JS</h1>,
    <p>It is Awesome</p>
  ],
  document.getElementById("root2")
);

//In render method we create an extra div to avoid this issue we use Fragment method

ReactDOM.render(
  <React.Fragment>
    <h1>React is the library of JS</h1>
    <p>It is Awesome</p>
  </React.Fragment>,
  document.getElementById("root3")
);
ReactDOM.render(
  <>
    <h1>React is the library of JS</h1>
    <p>It is Awesome</p>
  </>,
  document.getElementById("root4")
);

//........................JSX Challenge 1......................//

ReactDOM.render(
  <>
  <h1>Netflix Pick</h1>
  <p>Here the list of my favorite 5 netflix series</p>
  <ol>
    <li>Dark</li>
    <li>Extra curricular</li>
    <li>My Holo Love</li>
    <li>My first-2 love</li>
    <li>Mr Robot</li>
  </ol>

  </>,
   document.getElementById("root5")
);

//....................EXPRESSION in React....................

//.........if we write html  code inside javascript code we use jsx element but we use again javaScript code under this then we use expression i.e{ }..........

const flname="Ashish Sahoo";

ReactDOM.render(
  <>
  <h1>My name is {flname} </h1>
   <h3>My lucky number is {3+4}</h3>..........*/
   /*in pair of curly braces we can use only operation or expression */
  /*</>,
  document.getElementById("root6")
  
);

//....................Template Literals in JSX.....................//

const fname="Ashih";
const lname="Kumar";

ReactDOM.render(
  <>*/
//   {/* 1st way */}
//   <h1>My name is {fname} {lname}</h1>
//   {/* 2nd way */}
//   <h1>My name is {fname + " " +lname}</h1>
//   {/* 3rd way by use of template literal */}
//   <h1>{`My name is ${fname} ${lname}`}</h1>
//   </>,
//   document.getElementById("root7")
// );

/*.......................JSX Challenge2...................
1.Create a react app from sratch
2.Add one h1 element ex.Your name
3.Add one p element in it with Current Date
4.Add one p element in it with Current Time.....*/

/*const name="React";
const currDate=new Date().toLocaleDateString();
const currTime=new Date().toLocaleTimeString();

ReactDOM.render(
  <>
  <h1>Hello, My name is {name}</h1>
  <h3>Today date is ={currDate}</h3>
  <h3>Current Time is={currTime}</h3>
  </>,
  document.getElementById("root8")
);

//..................JSX Attribute.................//
import React from 'react';
import ReactDOM from 'react-dom';

const name2="RecatJS";
const img1="https://picsum.photos//200/300";
const img2="https://picsum.photos/200/300?grayscale";
const img3="https://picsum.photos/200/300";
const links="https://youtube.com/";

ReactDOM.render(
  <>
   <h1 contentEditable="true">My name is {name2}</h1>
   <img src={img1} alt="randomImages" />
   <img src={img2} alt="randomImages"/>
   <a href={links} target='_youtube'>
   <img src={img3} alt="randomImages"/>
   </a>
   
  </>,
  document.getElementById("root9")
);*/

import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";

const name2="RecatJS";
const img1="https://picsum.photos//200/300";
const img2="https://picsum.photos/200/300?grayscale";
const img3="https://picsum.photos/200/300";
const links="https://youtube.com/";

ReactDOM.render(
  <>
   <h1 className="heading">My name is {name2}</h1>
   <div className='img_div'>
   <img src={img1} alt="randomImages" />
   <img src={img2} alt="randomImages"/>
  
   <img src={img3} alt="randomImages"/>

   </div>
  
   
  </>,
  document.getElementById("root9")
);



