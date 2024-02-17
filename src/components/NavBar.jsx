import React from "react";
import AppLogo from "../assets/AppLogo";
import Avatar from "./Avatar";
import useAuth from "../hooks/use-auth";
import EditUserForm from "../features/auth/components/EditUserForm";
import useCircle from "../hooks/use-circle";

function NavBar() {
  const { authUser, logout } = useAuth();
  let circles;
  if(authUser) {
    circles = useCircle().circles
    // console.log(circles)
  }
  

  return (
    <div className="navbar static border-b bg-gradient-to-t from-base-200 to-white">
      {/* side bar */}

      {circles && <div className="flex-none">
        <div className="drawer">
          {/* Side bar Icon */}
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <label className="btn btn-square btn-ghost" htmlFor="my-drawer">
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
            </label>
          </div>

          {/* Side Bar content */}
          <div className="drawer-side top-[65px]">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>

            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
              <li>
                <details open>
                  <summary>My circle</summary>
                  <ul>
                    {circles.map(circle => (<li key={circle.id}>
                      <a>
                        {circle.circleName}
                      </a>
                    </li>))}
                  </ul>
                </details>
              </li>
              {/* <li>
                <details open>
                  <summary>Deactive circle</summary>
                  <ul>
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <details open>
                  <summary>Others circle</summary>
                  <ul>
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </details>
              </li> */}
            </ul>
          </div>
        </div>
      </div>}

      {/* app name and logo */}
      <div className="flex-1">
        <div className="btn btn-ghost py-2">
          <AppLogo />
          <a className="text-xl text-center">Settle up</a>
        </div>
      </div>

      {/* user path */}
      {authUser && (
        <div className="flex-none gap-4">

          {/* User data */}
          <div className="flex flex-col justify-end text-end">
            <div>{authUser.username}</div>
            <div>{authUser.email}</div>
          </div>

          {/* drop down button */}
          <div className="dropdown origin-top-right dropdown-end dropdown-hover">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-circle btn-ghost "
            >
              <Avatar name={authUser.username[0]} />
            </div>
            <ul
              tabIndex={0}
              className=" top-16 dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 "
            >
              <div className="flex flex-col">
                <button className="btn btn-ghost font-medium justify-start hover:bg-base-200">
                  Invitation management
                </button>
                <EditUserForm />
                {/* <button className="btn btn-ghost font-medium justify-start hover:bg-base-200">
                  Delete account
                </button> */}
                <button
                  className="btn btn-ghost font-medium justify-start hover:bg-base-200"
                  onClick={logout}
                >
                  Log out
                </button>
              </div>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default NavBar;
