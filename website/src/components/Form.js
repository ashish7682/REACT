import React from "react";
import "../styles/Home.css";
const Form = ()=>{
    const InputData=(e)=>{
        e.preventDefault();
      //console.log(e.target.regdNo.value);
      alert(
        `Your name ${e.target.fullname.value} and your regd number is ${e.target.regdNo.value}.` 
      );
    };

    return (
        <>
        <div className="H_Form">
            <form className="form" onSubmit={InputData}>
                <h3 style={{textAlign:"center"}}>Register Form</h3>
                <br/>
                <h5>Enter Your Name:</h5>
                <input type="text" placeholder="Enter Your Name" name="fullname" required/>
                <br/>
                <br/>
                <h5>Enter Your Regd No:</h5>
                <input type="text" placeholder="Enter RegdNo." name="regdNo" required/>
                <br/>
                <br/>
                <button type="submit" className="btn btn-primary" style={{width:"100%"}}>submit</button>

            </form>
        </div>
        </>
    );

};

export default Form;