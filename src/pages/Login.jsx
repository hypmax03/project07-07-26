import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate=useNavigate();
    const handleLogin=(e)=>{
        e.preventDefault();
        navigate("/posts")

    }
  return (
    <div className="min-h-screen bg-[#050505] bg-gradient-to-br from-[#07080c] via-[#08101a] to-[#07020a] flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
        <div className="mb-8 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Welcome back</p>
          <h1 className="mt-3 text-3xl font-semibold text-white">Sign in to your account</h1>
          <p className="mt-2 text-sm text-slate-400">Use your email and password to continue.</p>
        </div>

        <form className="space-y-6">
          <div className="space-y-3">
            <label htmlFor="email" className="block text-sm font-medium text-slate-200">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-white outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-500/20"
            />
          </div>

          <div className="space-y-3">
            <label htmlFor="password" className="block text-sm font-medium text-slate-200">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-white outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-500/20"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-2xl bg-sky-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:bg-sky-400"
            onClick={handleLogin}
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
