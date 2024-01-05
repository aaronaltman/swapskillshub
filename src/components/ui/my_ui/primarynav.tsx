import React, { useState } from "react";

const PrimaryNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-slate-800 px-5 py-4">
      <div className="flex flex-wrap justify-between items-center mx-auto">
        <a href="/" className="text-white text-2xl font-bold uppercase">
          CommuniSwap
        </a>
        <button
          className="text-white inline-flex items-center justify-center p-2 rounded-md hover:bg-slate-700 focus:outline-none focus:bg-slate-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            ></path>
          </svg>
        </button>
        <div
          className={`w-full ${
            menuOpen ? "block" : "hidden"
          } mt-4 flex flex-col items-center`}
        >
          <a
            href="/signin"
            className="text-white py-2 hover:bg-slate-700 w-full text-center"
          >
            Sign in
          </a>
          <a
            href="/signup"
            className="text-white py-2 hover:bg-slate-700 w-full text-center"
          >
            Sign up
          </a>
        </div>
      </div>
    </nav>
  );
};

export default PrimaryNav;
