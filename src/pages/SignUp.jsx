import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-500 via-blue-500 to-indigo-600 p-4">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-white/20">
        <h2 className="text-3xl font-bold text-white text-center mb-6">Create Account 🎉</h2>
        <form className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm text-white mb-1">Full Name</label>
            <input type="text" id="name" required placeholder="John Doe"
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-green-300" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm text-white mb-1">Email</label>
            <input type="email" id="email" required placeholder="john@example.com"
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-green-300" />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm text-white mb-1">Password</label>
            <input type="password" id="password" required placeholder="••••••••"
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-green-300" />
          </div>
          <button type="submit"
            className="w-full py-2 mt-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-all">
            Sign Up
          </button>
        </form>
        <p className="text-sm text-center text-white/80 mt-6">
          Already have an account?{" "}
          <Link to="/" className="text-green-200 hover:underline">Sign in</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
