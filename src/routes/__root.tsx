import { useState } from "react";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Link } from "@tanstack/react-router";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/fixturetable", label: "Fixtures" },
  { to: "/fantasy", label: "Fantasy" },
  { to: "/leaguetable", label: "League Table" },
];

const MenuIcon = ({ open }: { open: boolean }) => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    {open ? (
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
);

const RootComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-blue-600 fixed top-0 w-full shadow-md z-50">
        <div className="w-full px-4 py-3 flex items-center">
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
            aria-label="Toggle Menu"
          >
            <MenuIcon open={isOpen} />
          </button>

          {/* Navigation links */}
          <ul
            className={`${
              isOpen ? "flex flex-col space-y-2" : "hidden"
            } md:flex md:flex-row md:space-x-8 text-white font-medium`}
          >
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="hover:text-gray-300 transition-colors duration-200 cursor-pointer"
                  onClick={() => setIsOpen(false)} // Close menu when link clicked
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Give margin top to avoid content hidden behind navbar */}
      <div className="mt-16 md:mt-20">
        <Outlet />
        <TanStackRouterDevtools />
      </div>
    </>
  );
};

export const Route = createRootRoute({
  component: RootComponent,
});
