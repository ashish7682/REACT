import React, { useState } from "react";

const App = () => {

  const [name,setName]=useState("");
  const [fullName,setFullName]=useState();

  const inputEvent = (event) => {
    //console.log(event.target.value);
    setName(event.target.value);
  };
  

  const onSubmit=()=>{
    setFullName(name);
  };

  return (
    <>
    <form>
      <div>
        <h1>Hello {fullName}</h1>
        <input
          type="text"
          placeholder="Enter Your Name"
          onChange={inputEvent}
          value={name}
        />
        <br/>
        <button type="submit" onClick={onSubmit}>Submit Me 👍</button>
      </div>
      </form>
    </>
  );
};

export default App;
