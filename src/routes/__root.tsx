import { useState } from "react";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Link } from "@tanstack/react-router";
const RootComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="bg-blue-600 fixed top-0 w-full shadow-md z-50">
        <div className="container mx-auto px-4 py-3 flex items-center">
          <Link
            to="/"
            className="flex items-center text-white text-xl font-bold"
          >
            <img src="/sport.png" alt="Sport Logo" className="h-10 w-10 mr-3" />
            <span>Sport</span>
          </Link>

          <div className="flex-1"></div>

          {/* Hamburger button on mobile */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Navigation links */}
          <ul
            className={`${
              isOpen ? "flex flex-col space-y-2" : "hidden"
            } md:flex md:flex-row md:space-x-8 text-white font-medium`}
          >
            <li>
              <Link
                to="/"
                className="hover:text-gray-300 transition-colors duration-200 cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/fixturetable"
                className="hover:text-gray-300 transition-colors duration-200 cursor-pointer"
              >
                Fixtures
              </Link>
            </li>
            <li>
              <Link
                to="/fantasy"
                className="hover:text-gray-300 transition-colors duration-200 cursor-pointer"
              >
                Fantasy
              </Link>
            </li>
            <li>
              <Link
                to="/leaguetable"
                className="hover:text-gray-300 transition-colors duration-200 cursor-pointer"
              >
                League Table
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="mt-40">
        <Outlet />
        <TanStackRouterDevtools />
      </div>
    </>
  );
};

export const Route = createRootRoute({
  component: RootComponent,
});
