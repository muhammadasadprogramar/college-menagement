import React from 'react'
import { IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-white relative p-6 rounded-lg shadow-lg w-full max-w-md mx-auto">
        <Link to='/'>
      <div className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer bg-red-600 absolute right-5 top-5 text-white font-medium text-2xl"><IoClose /></div>
      </Link>
        <div className="text-center mb-6">
          <img 
            src="/single-logo.png" 
            alt="logo" 
            className="w-16 mx-auto"
          />
          <h1 className="text-xl font-semibold mt-4">College Education Department</h1>
          <p className="text-gray-500 text-sm">Management & Information System</p>
        </div>

        <form onSubmit={(e) => e.preventDefault()} method="POST" className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#009879] focus:border-[#009879] sm:text-sm"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#009879] focus:border-[#009879] sm:text-sm"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="text-center">
            <button 
              type="submit" 
              className="w-full bg-[#009879] text-white px-4 py-2 rounded-md hover:bg-[#008069] focus:outline-none focus:ring-2 focus:ring-[#009879]"
            >
              Sign in
            </button>
          </div>
        </form>

        <div className="text-center mt-4">
          <a href="#" className="text-sm text-[#009879] hover:underline">Forgot your password?</a>
          <p className="text-gray-500 text-sm mt-2">OR</p>
          <a href="#" className="text-sm text-[#009879] hover:underline">Don't have an account?</a>
        </div>
      </div>
    </div>
  )
}

export default Login