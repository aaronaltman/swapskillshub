import React from "react";
import { useState } from "react";

// Dummy Profile Picture URL
const profilePicUrl = "https://via.placeholder.com/32";

const PrimaryNav = () => {
  const [isSignedIn, setIsSignedIn] = useState(false); // Placeholder state

  return (
    <nav className="bg-slate-800 px-2 py-10">
      <div className="mx-auto flex justify-between  items-center">
        <div className="text-white">
          <a href="/" className="text-2xl font-bold uppercase">
            CommuniSwap
          </a>
        </div>
        <div className="flex flex-col text-white gap-2">
          <p>Sign in</p>
          <p>Sign up</p>
        </div>
      </div>
    </nav>
  );
};

export default PrimaryNav;
