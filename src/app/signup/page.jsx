// import { useState } from 'react';

// export default function SignUp() {
//   const [formData, setFormData] = useState({
//     username: '',
//     name: '',
//     email: '',
//     password: '',
//     file: null,
//     otp: '',
//   });

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: files ? files[0] : value,
//     }));
//   };

//   const sendMail = async () => {
//     const { email } = formData;

//     try {
//       console.log("otp sending")
//       const response = await fetch('/api/user/sendemail', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email }),
//       });

//       if (response.ok) {
//         const result = await response.json();
//         console.log(result);
//       } else {
//         const errorResult = await response.json();
//         console.error(errorResult);
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const { username, name, email, password, file, otp } = formData;

//     const form = new FormData();
//     form.append('username', username);
//     form.append('name', name);
//     form.append('email', email);
//     form.append('password', password);
//     form.append('file', file);
//     form.append('otp', otp);

//     try {
//       const response = await fetch('/api/user/signup', {
//         method: 'POST',
//         body: form,
//       });

//       if (response.ok) {
//         const result = await response.json();
//         console.log(result);
//         // Redirect or perform other actions upon successful signup
//       } else {
//         const errorResult = await response.json();
//         console.error(errorResult);
//         // Handle error response from the server
//       }
//     } catch (error) {
//       console.error(error);
//       // Handle network or other errors
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-900  text-blue-800">
//       <div className="max-w-md w-full p-6 bg-gray-800 shadow-md rounded-md">
//         <h1 className="text-3xl font-semibold mb-6">Sign Up</h1>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-sm font-semibold mb-2">
//               Email:
//             </label>
//             <div className="flex">
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 border rounded-md"
//                 required
//               />
//               <button
//                 onClick={sendMail}
//                 className="ml-2 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
//                 type="button"
//               >
//                 Send OTP
//               </button>
//             </div>
//           </div>

//           <div className="mb-4">
//             <label htmlFor="otp" className="block text-sm font-semibold mb-2">
//               OTP:
//             </label>
//             <input
//               type="text"
//               id="otp"
//               name="otp"
//               onChange={handleChange}
//               className="w-full px-3 py-2 border rounded-md"
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label htmlFor="username" className="block text-sm font-semibold mb-2">
//               Username:
//             </label>
//             <input
//               type="text"
//               id="username"
//               name="username"
//               onChange={handleChange}
//               className="w-full px-3 py-2 border rounded-md"
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label htmlFor="name" className="block text-sm font-semibold mb-2">
//               Name:
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               onChange={handleChange}
//               className="w-full px-3 py-2 border rounded-md"
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label htmlFor="password" className="block text-sm font-semibold mb-2">
//               Password:
//             </label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               onChange={handleChange}
//               className="w-full px-3 py-2 border rounded-md"
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label htmlFor="file" className="block text-sm font-semibold mb-2">
//               Profile Picture:
//             </label>
//             <input
//               type="file"
//               id="file"
//               name="file"
//               accept="image/*"
//               onChange={handleChange}
//               className="w-full px-3 py-2 border rounded-md"
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
//           >
//             Sign Up
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }
"use client"
;
// Import necessary packages and modules
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/navigation";
import Link from 'next/link';

// Define the SignUp component
const SignUp = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: '',
    name: '',
    email: '',
    password: '',
    file: null,
    otp: '',
  });

  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [signupError, setSignupError] = useState(null);

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
      setLoading(true);
      const response = await fetch('/api/user/sendemail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.status === 200) {
        const result = await response.json();
        setOtpSent(true);
        toast.success('OTP sent successfully!');
      } else {
        const errorResult = await response.json();
        console.error(errorResult);
        setSignupError('Failed to send OTP. Please try again.');
        setOtpSent(false);
      }
    } catch (error) {
      console.error(error);
      setSignupError('An error occurred. Please try again.');
      setOtpSent(false);
    } finally {
      setLoading(false);
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
      setLoading(true);
      const response = await fetch('/api/user/signup', {
        method: 'POST',
        body: form,
      });

      if (response.status === 200) {
        const result = await response.json();
        toast.success('Sign Up successful! redirecting to login...');
        setTimeout(() => {
          router.push('/login');
        }, 2000);
      } else {
        const errorResult = await response.json();
        console.error(errorResult);
        setSignupError('Failed to sign up. Please try again.');
      }
    } catch (error) {
      console.error(error);
      setSignupError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
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
                className="w-full px-3 py-2 border rounded-md text-white bg-gray-700"
                required
              />
              <button
                onClick={sendMail}
                className={`ml-2 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 ${
                  loading || otpSent ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                type="button"
                disabled={loading || otpSent}
              >
                {loading ? 'Sending...' : otpSent ? 'OTP Sent' : 'Send OTP'}
              </button>
            </div>
          </div>

          {otpSent && (
            <>
              {/* Other form fields for OTP, username, name, password, and profile picture */}
            </>
          )}

          {signupError && (
            <div className="mb-4 text-red-500">{signupError}</div>
          )}

          <button
            type="submit"
            className={`w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition ${
              loading || !otpSent ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={loading || !otpSent}
          >
            {loading ? 'Signing Up...' : 'Sign Up'}
          </button>
        </form>
        <div className="mt-3 text-sm text-gray-500">
          Already registered?{" "}
          <Link href="/login"
          className="text-blue-500 hover:underline" >Log in here
          </Link>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

// Export the SignUp component
export default SignUp;

