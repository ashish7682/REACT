import React from "react";

const SlotM=(props)=>
{
  //  let x= '😄';
  //  let y= '😄';
  //  let z= '🎅';

//  let x=props.x;
//  let y=props.y;
//   let z=props.z;..........This can be written in object dis-structuring format..

let {x,y,z}=props;

   if(x===y && y===z)
   {
       return(
        <>
          <div className='slot_inner'>

          <h1> {x} {y} {z}</h1>
          <h1>This is Matching.</h1>
          

          </div>
        </>
       );
   }else
   {
        return(
          <>
          <div className='slot_inner'>
             <h1>{x} {y} {z}</h1>
             <h1>This is not Matching</h1>
             
          </div>
          </>
        )
   }

};

export default SlotM;