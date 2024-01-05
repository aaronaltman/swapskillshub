import React from "react";

export default function HomeHero() {
  return (
    <div className="flex flex-col justify-center gap-6 bg-slate-50 max-w-6xl text-xl mx-auto px-6 py-4">
      <div className="flex justify-between">
        <p className="py-4 px-10 max-w-[10rem] bg-slate-900 rounded-lg text-slate-50">
          Sign In
        </p>
        <p className="py-4 px-10 bg-slate-300 rounded-lg text-slate-900">
          Sign Up
        </p>
      </div>
    </div>
  );
}
