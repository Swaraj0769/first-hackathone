import React from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 p-4">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-white/20">
        <h2 className="text-3xl font-bold text-white text-center mb-6">Reset Password 🔐</h2>
        <form className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm text-white mb-1">Email Address</label>
            <input type="email" id="email" required placeholder="you@example.com"
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-yellow-300" />
          </div>
          <button type="submit"
            className="w-full py-2 mt-4 bg-white text-pink-600 font-semibold rounded-lg hover:bg-gray-100 transition-all">
            Send Reset Link
          </button>
        </form>
        <p className="text-sm text-center text-white/80 mt-6">
          Remember your password?{" "}
          <Link to="/" className="text-yellow-200 hover:underline">Sign in</Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
