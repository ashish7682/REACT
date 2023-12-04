import React, { useState } from "react";

const App = () => {

  let newTime=new Date().toLocaleTimeString();

  const [ctime,setCtime]=useState(newTime);

  const UpdateTime=()=>
  {
    
    let newTime=new Date().toLocaleTimeString();
    setCtime(newTime);
  };
setInterval(UpdateTime,1000);
  return (
<>  
<div>
<h1>{ctime}</h1>
<button onClick={UpdateTime}>GET TIME</button>
</div>

</>
  );
}

export default App;;