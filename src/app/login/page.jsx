// pages/api/upload.js

// pages/index.js


// "use client";

// // components/LoginForm.js
// import { useState } from "react";
// import toast from "react-hot-toast";
// import axios from "axios";

// const LoginForm = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = async () => {
//     try {
//       console.log("Logging in...");
//       const response = await axios.post("/api/user/login", 
//         {
//           "username":"one",
//           "password":"one",
//           "email":"one"
//       }
//     );

//       console.log("Login successful");
//       toast.success('Successfully Logged !!');
//       // If login is successful, you might want to redirect or perform some other action

//     } catch (error) {
//       console.error("Login error:", error);
//       toast.error('Login failed. Please check your credentials.');
//     }
//   };

//   return (
//     <div className="gap-6 w-screen h-screen bg-slate-100 flex flex-col justify-center items-center">
//       {/* ... your input fields */}
//       <button className="bg-orange-400 p-5" onClick={handleLogin}>
//         Submit
//       </button>
//     </div>
//   );
// };

// export default LoginForm;
"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleLogin = async () => {
    try {
      console.log("Logging in...");
      const response = await axios.post("/api/user/login", {
        username,
        password,
        email,
      });

      console.log("Login successful");
      toast.success('Successfully Logged !!');
      // If login is successful, you might want to redirect or perform some other action

    } catch (error) {
      console.error("Login error:", error);
      toast.error('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="gap-6 w-screen h-screen bg-slate-600 flex flex-col justify-center items-center">
      <div className="relative w-full sm:w-1/3 drop-shadow-2xl shadow-2xl text-xl ">
        <input
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          className="peer w-full h-full bg-transparent text-blue-600 text-3xl font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900 text-blue-500"
          placeholder=" "
        />
        <label
          className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900"
        >
          Input username
        </label>
      </div>
      <div className="relative w-full sm:w-1/3 drop-shadow-2xl shadow-2xl text-xl">
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="peer w-full h-full bg-transparent text-blue-600 text-3xl font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900 text-blue-500"
          placeholder=" "
        />
        <label
          className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900"
        >
          Input Email
        </label>
      </div>
      <div className="relative w-full min-w-[200px] h-11 sm:w-1/3">
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className="w-full h-full px-3 py-3 font-sans text-blue-500 p-5 text-2xl font-normal transition-all bg-transparent border rounded-md peer text-blue-gray-700 outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 border-t-transparent focus:border-t-transparent border-blue-gray-200 focus:border-gray-900 text-blue-500"
          placeholder=" "
        />
        <label
          className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[4.1] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900"
        >
          Input password
        </label>
      </div>
      <button className="bg-orange-400 p-5" onClick={handleLogin}>
        Submit
      </button>
    </div>
  );
};

export default LoginForm;
