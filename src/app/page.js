// pages/index.js
"useclient"
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-6">Next Auth</h1>
        <div className="space-x-4">
          <Link href="/login"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 ease-in-out">
              Login
            
          </Link>
          <Link href="/signup"
           className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300 ease-in-out">
              Signup
          
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
