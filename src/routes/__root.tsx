// routes/RootRoute.tsx
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Link } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <>
      {/* Navbar */}
      <nav className="bg-blue-600 fixed top-0 w-full shadow-md z-50">
        <div className="container mx-auto px-4 py-3 flex items-center">
          {/* Logo Link */}
          <Link
            to="/"
            className="flex items-center text-white text-xl font-bold"
          >
            <img src="/sport.png" alt="Sport Logo" className="h-10 w-10 mr-3" />
            <span>Sport</span>
          </Link>

          <div className="flex-1"></div>

          {/* Navigation Links */}
          <ul className="hidden md:flex space-x-8 text-white font-medium">
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

      {/* Page Content */}
      <div className="mt-16">
        <Outlet />
        <TanStackRouterDevtools />
      </div>
    </>
  ),
});
