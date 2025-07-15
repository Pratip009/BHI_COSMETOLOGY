import React from 'react';

const SignUp = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-[#0e0e0e]">
      <div className="w-full max-w-md p-8 rounded-2xl bg-white/10 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.37)] border border-white/30">
        <h2 className="text-3xl font-bold text-white mb-6 text-center drop-shadow">Create an Account</h2>

        <form className="space-y-5">
          <div>
            <label className="block mb-1 text-white/90">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/70 border border-white/30 shadow-inner focus:outline-none focus:ring-2 focus:ring-white/50"
            />
          </div>

          <div>
            <label className="block mb-1 text-white/90">Email</label>
            <input
              type="email"
              placeholder="john@example.com"
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/70 border border-white/30 shadow-inner focus:outline-none focus:ring-2 focus:ring-white/50"
            />
          </div>

          <div>
            <label className="block mb-1 text-white/90">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/70 border border-white/30 shadow-inner focus:outline-none focus:ring-2 focus:ring-white/50"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-white/90 text-purple-700 font-bold py-2 rounded-lg hover:bg-white transition duration-300 shadow-md"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-sm text-white/80 mt-6">
          Already have an account?{' '}
          <span className="underline cursor-pointer hover:text-white">Log In</span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
