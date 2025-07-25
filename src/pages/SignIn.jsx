import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-700 p-4">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-white/20">
        <h2 className="text-3xl font-bold text-white text-center mb-6">Welcome Back 👋</h2>
        <form className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm text-white mb-1">Email Address</label>
            <input type="email" id="email" required placeholder="you@example.com"
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-300" />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm text-white mb-1">Password</label>
            <input type="password" id="password" required placeholder="••••••••"
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-300" />
          </div>
          <div className="flex items-center justify-between text-sm text-white/80">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox accent-blue-500" />
              <span>Remember me</span>
            </label>
            <Link to="/forgot-password" className="text-blue-200 hover:underline">Forgot password?</Link>
          </div>
          <button type="submit"
            className="w-full py-2 mt-4 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-100 transition-all">
            Sign In
          </button>
        </form>
        <p className="text-sm text-center text-white/80 mt-6">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-200 hover:underline">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
