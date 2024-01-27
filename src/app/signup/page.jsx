// "use client";

// import { useState } from "react";

// export default function Login() {
//   const [file, setFile] = useState("");
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [name, setName] = useState("");

//   const onSubmit = async (e) => {
//     e.preventDefault();
    // const data = new FormData();
    // data.append("file", file);
    // data.append("username", username);
    // data.append("email", email);
    // data.append("password", password);
    // data.append("name", name);

    // const result = await fetch("api/user/signup", {
    //   method: "POST",
    //   body: data,
//     });
//     console.log(result)
   
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full bg-white p-8 rounded-md shadow-md space-y-6">
//         <h1 className="text-center text-3xl font-extrabold text-gray-900">
//           Upload an Image
//         </h1>
//         <form onSubmit={onSubmit}>
//           <div className="space-y-4">
            
//             <div>
//               <label htmlFor="name" className="sr-only">
//                 Name
//               </label>
//               <input
//                 id="name"
//                 name="name"
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 placeholder="Name"
//                 className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 transition-all duration-300 ease-in-out"
//               />
//             </div>
//             <div>
//               <label htmlFor="username" className="sr-only">
//                 Username
//               </label>
//               <input
//                 id="username"
//                 name="username"
//                 type="text"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 placeholder="Username"
//                 className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 transition-all duration-300 ease-in-out"
//               />
//             </div>
//             <div>
//               <label htmlFor="email" className="sr-only">
//                 Email
//               </label>
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Email"
//                 className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 transition-all duration-300 ease-in-out"
//               />
//             </div>
//             <div>
//               <label htmlFor="password" className="sr-only">
//                 Password
//               </label>
//               <input
//                 id="password"
//                 name="password"
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="Password"
//                 className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 transition-all duration-300 ease-in-out"
//               />
//             </div>
//             <div>
//               <label htmlFor="file" className="sr-only">
//                 File
//               </label>
//               <input
//                 id="file"
//                 name="file"
//                 type="file"
//                 onChange={(e) => setFile(e.target.files?.[0])}
//                 className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 transition-all duration-300 ease-in-out"
//               />
//             </div>
//           </div>
//           <div className=" mt-3">
//             <button
//               type="submit"
//               className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 ease-in-out"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }
"use client"
// import { NextResponse } from "next/server";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import toast from "react-hot-toast";
// import { Toaster } from "react-hot-toast";
// export default function Signup() {
//   const router = useRouter();

//   const [file, setFile] = useState("");
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [name, setName] = useState("");
//   const [isButtonDisabled, setIsButtonDisabled] = useState(true);

//   const handleInputChange = () => {
//     // Validate the form fields
//     const isFormValid = name && username && email && password && file;
//     setIsButtonDisabled(!isFormValid);
//   };

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // Your existing code for form submission
//       const data = new FormData();
//       data.append("file", file);
//       data.append("username", username);
//       data.append("email", email);
//       data.append("password", password);
//       data.append("name", name);
  
//       const result = await fetch("api/user/signup", {
//         method: "POST",
//         body: data,
//       })
//       toast.success('Successfully Signup')
      
//       // If signup is successful, navigate to the login page
//       toast.success('pushing to login page.', {
//         style: {
//           border: '1px solid #713200',
//           padding: '16px',
//           color: '#713200',
//         },
//         iconTheme: {
//           primary: '#713200',
//           secondary: '#FFFAEE',
//         },
//       });
      
//       router.push("/login");
//     } catch (error) {
//       console.error(error);
//       // Handle errors here, show a message to the user, etc.
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full bg-white p-8 rounded-md shadow-md space-y-6">
//         <h1 className="text-center text-3xl font-extrabold text-gray-900">
//           Signup
//         </h1>
//         <form onSubmit={onSubmit} onChange={handleInputChange}>
//           <div className="space-y-4">
//             <div>
//               <label htmlFor="name" className="sr-only">
//                 Name
//               </label>
//               <input
//                 id="name"
//                 name="name"
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 placeholder="Name"
//                 className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 transition-all duration-300 ease-in-out"
//               />
//             </div>
//             <div>
//               <label htmlFor="username" className="sr-only">
//                 Username
//               </label>
//               <input
//                 id="username"
//                 name="username"
//                 type="text"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 placeholder="Username"
//                 className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 transition-all duration-300 ease-in-out"
//               />
//             </div>
//             <div>
//               <label htmlFor="email" className="sr-only">
//                 Email
//               </label>
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Email"
//                 className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 transition-all duration-300 ease-in-out"
//               />
//             </div>
//             <div>
//               <label htmlFor="password" className="sr-only">
//                 Password
//               </label>
//               <input
//                 id="password"
//                 name="password"
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="Password"
//                 className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 transition-all duration-300 ease-in-out"
//               />
//             </div>
//             <div>
//               <label htmlFor="file" className="sr-only">
//                 File
//               </label>
//               <input
//                 id="file"
//                 name="file"
//                 type="file"
//                 onChange={(e) => setFile(e.target.files?.[0])}
//                 className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 transition-all duration-300 ease-in-out"
//               />
//             </div>
//           </div>
//           <div className=" mt-3">
//             <button
//               type="submit"
//               className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 ease-in-out"
//               disabled={isButtonDisabled}
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//       <Toaster
//   position="top-center"
//   reverseOrder={false}
// />



//     </div>
//   );
// }
// pages/signup.js
// pages/signup.js
import { useState } from 'react';

export default function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
    name: '',
    email: '',
    password: '',
    file: null,
    otp: '',
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const sendMail = async () => {
    const { email } = formData;

    try {
      console.log("otp sending")
      const response = await fetch('/api/user/sendemail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result);
      } else {
        const errorResult = await response.json();
        console.error(errorResult);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { username, name, email, password, file, otp } = formData;

    const form = new FormData();
    form.append('username', username);
    form.append('name', name);
    form.append('email', email);
    form.append('password', password);
    form.append('file', file);
    form.append('otp', otp);

    try {
      const response = await fetch('/api/user/signup', {
        method: 'POST',
        body: form,
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result);
        // Redirect or perform other actions upon successful signup
      } else {
        const errorResult = await response.json();
        console.error(errorResult);
        // Handle error response from the server
      }
    } catch (error) {
      console.error(error);
      // Handle network or other errors
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900  text-blue-800">
      <div className="max-w-md w-full p-6 bg-gray-800 shadow-md rounded-md">
        <h1 className="text-3xl font-semibold mb-6">Sign Up</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold mb-2">
              Email:
            </label>
            <div className="flex">
              <input
                type="email"
                id="email"
                name="email"
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md"
                required
              />
              <button
                onClick={sendMail}
                className="ml-2 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                type="button"
              >
                Send OTP
              </button>
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="otp" className="block text-sm font-semibold mb-2">
              OTP:
            </label>
            <input
              type="text"
              id="otp"
              name="otp"
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-semibold mb-2">
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-semibold mb-2">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-semibold mb-2">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="file" className="block text-sm font-semibold mb-2">
              Profile Picture:
            </label>
            <input
              type="file"
              id="file"
              name="file"
              accept="image/*"
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
