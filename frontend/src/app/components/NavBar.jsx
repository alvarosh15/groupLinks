import React from "react";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className="flex items-center shadow-2xl w-11/12 h-20 text-gray-700 rounded-lg bg-gray-200">
      <p className="pl-5 basis-4/5 font-medium text-4xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-800">
        GroupLinks
      </p>
      <div className="flex h-5/6 items-center basis-1/5">
        <Link className="h-full w-11/12" href="/signup">
          <div className="h-full flex items-center justify-center text-center rounded-2xl bg-slate-300 font-medium text-lg">
            Sign up
          </div>
        </Link>
        <Link className="h-full w-11/12" href="/login">
          <div className="h-full mx-2 flex items-center justify-center text-center rounded-2xl bg-slate-500 text-slate-100 font-medium text-lg">
            Log in
          </div>
        </Link>
      </div>
    </div>
  );
}
