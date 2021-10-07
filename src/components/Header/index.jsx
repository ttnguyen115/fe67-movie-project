import React from "react";
import { NavLink } from "react-router-dom";
import "./index.scss";

const Header = () => {
  return (
    <div>
      <header className="p-4 bg-coolGray-100 text-coolGray-800 header-bg-color  fixed w-full z-10">
        <div className="container flex justify-between h-16 mx-auto">
          {/* Logo */}
          <NavLink
            to="/"
            aria-label="Back to homepage"
            className="flex items-center p-2"
          >
            <img className="w-10" src="https://i.imgur.com/lC22izJ.png" />
          </NavLink>

          {/* menu header */}
          <ul className="items-stretch hidden space-x-3 lg:flex">
            <li className="flex">
              <NavLink
                to="/"
                className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-violet-600 border-violet-600 duration-500 hover:text-blue-500"
              >
                Home
              </NavLink>
            </li>
            <li className="flex">
              <NavLink
                to="/"
                className="flex items-center px-4 -mb-1 border-b-2 border-transparent duration-500 hover:text-blue-500"
              >
                Catalog
              </NavLink>
            </li>
            <li className="flex">
              <NavLink
                to="/"
                className="flex items-center px-4 -mb-1 border-b-2 border-transparent duration-500 hover:text-blue-500"
              >
                Pricing plans
              </NavLink>
            </li>
          </ul>

          {/* search, login */}
          <div className="flex items-center md:space-x-4">
            <div className="relative">
              <span className="absolute inset-y-0 right-0 flex items-center pl-2 ">
                <button
                  type="submit"
                  title="Search"
                  className="p-1 focus:outline-none focus:ring text-blue-500	"
                >
                  <svg
                    fill="currentColor"
                    viewBox="0 0 512 512"
                    className="w-4 h-4 text-coolGray-800"
                  >
                    <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z" />
                  </svg>
                </button>
              </span>

              <input
                type="search"
                name="Search"
                placeholder="Search..."
                className="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none bg-coolGray-100 text-coolGray-800 focus:bg-coolGray-50"
              />
            </div>

            <NavLink
              to="signin"
              type="button"
              className="hidden px-6 py-2 font-semibold rounded lg:block bg-violet-600 duration-500 hover:text-blue-500 "
            >
              Sign Up
            </NavLink>
            <NavLink
              to="signup"
              type="button"
              className="hidden px-6 py-2 font-semibold rounded lg:block bg-violet-600 duration-500 hover:text-blue-500 "
            >
              Sign In
            </NavLink>
          </div>

          <button title="Open menu" type="button" className="p-4 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 text-coolGray-800"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
