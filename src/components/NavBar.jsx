import React from "react";
import AppLogo from "../assets/AppLogo";
import Avatar from "./Avatar";

function NavBar() {
  return (
    <div className="navbar bg-base-100 fixed">
      {/* side bar */}
      <div className="flex-none">
        <button className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      {/* app name and logo */}
      <div className="flex-1">
        <div className="btn btn-ghost py-2">
          <AppLogo />
          <a className="text-xl text-center">Settle up</a>
        </div>
      </div>

      {/* user path */}
      <div className="flex-none gap-4">

        <div className="flex flex-col justify-end text-end">
            <div>username</div>
            <div>email</div>
        </div>
            
        <button className="btn btn-circle btn-ghost ">
          <Avatar />
        </button>
      </div>
    </div>
  );
}

export default NavBar;
