import React, { useState } from 'react';

const App1 = () => {

let newTime=new Date().toLocaleTimeString();

const[ctime,setCtime]=useState(newTime);/*newTime-intial data,ctime-currentData ,setCtime-updated Data*/

  const UpdateTime=() =>
  {
    let newCTime=new Date().toLocaleTimeString();
    setCtime(newCTime);
  };

  return (
   <>
   <div>
       <h1>{ctime}</h1>
   <button onClick={UpdateTime}>Get Time</button>
   </div>
  
   </>
  );
};

export default App1;