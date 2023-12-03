import React,{useState} from "react";



const App = () => {

const state=useState();
const [count,setCount]=useState(0);
// console.log(state);

// let count=1;

const IncNum=()=>
{
  setCount(count+1);
  // console.log("clicked" +count++);
};
const ReNum=()=>
{
  setCount(0);
  // console.log("clicked" +count++);
};
const DecNum=()=>
{
  setCount(count-1);
  // console.log("clicked" +count++);
};
  return (
  <>
  
  <div className="container">
      <div className="contains">
        <h1>Counter App</h1>

        <h1 id="number">{count}</h1>

        <div>
          <button className="btn-ope" id="btn-decrease" onClick={DecNum}>Decrease</button>
          <button className="btn" id="btn-reset" onClick={ReNum}>Reset</button>
          <button className="btn-ope" id="btn-increase" onClick={IncNum}>Increase</button>
        </div>
      </div>
  </div>
  </>
  );
};


export default App;
