import React from "react";

import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <div className="h-screen bg-gradient-to-r from-cyan-500 to-blue-500 h-screen flex flex-col items-center justify-center">
      <NavBar className="basis-2/12" />
      <div className="w-11/12 pt-4 basis-10/12">
        <h1 className="m-5 text-blue-800 font-black text-8xl">
          All your links in a simple link in bio.
        </h1>
        <p className="m-5 text-blue-800 font-medium text-xl">
          GroupLinks helps you share all your links from your Instagram, TikTok,
          Twitter, YouTube and other social media profiles in the same link.
        </p>
      </div>
    </div>
  );
}
