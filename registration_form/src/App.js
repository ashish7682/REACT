
//...............Oneway to create a Registration form.....................//

/*import React, { useState } from "react";

const App = () => {

  const [firstName, setFirstName] = useState("");

  const [firstNameNew, setFirstNameNew] = useState();

  const [lastName,setLastName]=useState("");
  
  const [lastNameNew,setLastNameNew]=useState();

  const inputEvent = (event) => {
    // console.log(event.target.value);
    setFirstName(event.target.value);
  };


  const inputEvent2 = (event) => {
    // console.log(event.target.value);
    setLastName(event.target.value);
  };


  const onSubmits = (event) => {
    event.preventDefault();
    setFirstNameNew(firstName);
    setLastNameNew(lastName);    
  };

  return (
    <>
      <div className="main_div">
        <form onSubmit={onSubmits}>
          <div>

            <h1>Hello {firstNameNew} {lastNameNew}</h1>

            <input type="text" placeholder="Enter Your First Name ✍️" onChange={inputEvent} value={firstName}/>
            <input type="text" placeholder="Enter Your Last  Name ✍️" onChange={inputEvent2} value={lastName}/>

            <button type="submit" onClick={onSubmits}> Submit Me 👍 </button>

          </div>
        </form>
      </div>
    </>
  );
};
export default App;*/


//..................Another way to Create a registration form.....................//


import React, { useState } from "react";

const App = () => {

  const [fullName,setFullName]=useState({
    fname:"",
    lname:"",
    email:"",
    phone:"",
  });

  const inputEvent = (event) => {
    console.log(event.target.value);
    console.log(event.target.name);
    
    // const value = event.target.value;
    // const name= event.target.name;

    const {value , name}=event.target;

    setFullName((preValue) =>{
  
      if(name==="fName")
      {
        return{
          fname:value,
          lname:preValue.lname,
          email:preValue.email,
          phone:preValue.phone,
        };
      }else if(name === "lName")
      {
        return {
          fname:preValue.fname,
          lname:value,
          email:preValue.email,
          phone:preValue.phone,
        };
      }else if(name === "email")
      {
        return {
          fname:preValue.fname,
          lname:preValue.lname,
          email:value,
          phone:preValue.phone,
        };
      }else if(name === "phone")
      {
        return {
          fname:preValue.fname,
          lname:preValue.lname,
          email:preValue.email,
          phone:value,
        };
      }
    
    });
  };

  const onSubmits = (event) => {
    event.preventDefault(); 
    alert("form submitted"); 
  };

  return (
    <>
      <div className="main_div">
        <form onSubmit={onSubmits}>
          <div>

            <h1>Hello {fullName.fname} {fullName.lname} </h1>
            <p> {fullName.email} </p>
            <p> {fullName.phone} </p>

            <input type="text" placeholder="Enter Your First Name ✍️" name="fName" onChange={inputEvent} value={fullName.fname}/>
            <input type="text" placeholder="Enter Your Last  Name ✍️" name="lName" onChange={inputEvent} value={fullName.lname}/>
            <input type="email" placeholder="Enter Your email 📩" name="email" onChange={inputEvent} value={fullName.email} autoComplete="off"/> 
            <input type="number" placeholder="Enter Your Phone No. 📞" name="phone" onChange={inputEvent} value={fullName.phone}/> 



           
            <button type="submit" onClick={onSubmits}> Submit Me 👍 </button>

          </div>
        </form>
      </div>
    </>
  );
};
export default App;