"use client";
export default function profile(){

const handle = async() =>{
  const response = await fetch('/api/user/profile', {
    method: 'GET'



}
  )
  console.log("response below")
  const data =  await response.json();
  console.log("data is given below")
  console.log( data)

}
return(
  <>
  <div>
    <button onClick={handle} className=" bg-slate-600 text-white p-5 m-8">Click me</button>
  </div>
  
  </>
)

}