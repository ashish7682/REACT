/*import React from "react";
import ReactDOM from "react-dom";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import List from "./List";

function App() {
    return (
        <>
        <Heading/>
        <Paragraph/>
        <List/>
        <Paragraph/>
        </>
    );
}

export default App;*/

/*const youtuber="Thapa Technical";
const favprog="React JS";

function myName()
{
   let name='Ashish'
   return name;
}

function myNames()
{
   let names='Kumar'
   return names;
}

export default youtuber;

export  {favprog,myName,myNames};*/

import React from "react";
import  ReactDOM from "react-dom";
import {add,sub,mul,div} from "./Calc";

function App()
{
    return(
    <ul>
      <li>Sum of two number is {add(40,4)}</li>
      <li>Sub of two number is {sub(40,4)}</li>
      <li>mul of two number is {mul(40,4)}</li>
      <li>Div of two number is {div(100,7)}</li>
    </ul>
    )
}

export default App;
