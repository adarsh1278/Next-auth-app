"use client";
import Image from "next/image";
import { useState } from "react";
export default function profile(){
  
let img;
const [render , setRender] = useState("");
const animation =    <div className="flex items-center justify-center h-screen bg-blur">
<div className="bg-white bg-opacity-50 p-8 rounded-lg shadow-lg">
  <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
</div>
</div>
 async function handle(){
  setRender(animation)
  const response = await fetch('/api/user/profile', {
    method: 'GET'



}
  )
  console.log("response below")
  const data =  await response.json();
  console.log("data is given below")
  console.log( data.data.avtar)
 img = data.data.avtar;
 setRender(<img src={img} alt="no image"/>)
 
}

return(
  <>
  <div className=" flex justify-center  items-center bg-slate-300 text-2xl w-screen h-screen">
    <button onClick={handle}  className=" bg-slate-600 text-white p-5 m-8">Click me</button>
    
    {render}
  </div>
 

  
  </>
)

}