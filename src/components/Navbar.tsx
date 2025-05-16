export const Navbar = () => {
  return (
    <nav className="bg-blue-600 fixed top-0 w-full shadow-md z-50">
      <div className="container mx-auto px-4 py-3 flex items-center">
        {/* Logo aligned to the left */}
        <a href="/" className="flex items-center text-white text-xl font-bold">
          <img src="./sport.png" alt="Sport Logo" className="h-10 w-10 mr-3" />
          <span>Sport</span>
        </a>

        {/* Spacer to push navigation and button to the right */}
        <div className="flex-1"></div>

        {/* Navigation buttons aligned to the right */}
        <ul className="hidden md:flex space-x-8 text-white font-medium">
          <li>
            <a
              href="/"
              className="hover:text-gray-300 transition-colors duration-200"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/fixturetable"
              className="hover:text-gray-300 transition-colors duration-200"
            >
              Fixtures
            </a>
          </li>
          <li>
            <a
              href="/fantasy"
              className="hover:text-gray-300 transition-colors duration-200"
            >
              Fantasy
            </a>
          </li>
          <li>
            <a
              href="/leaguetable"
              className="hover:text-gray-300 transition-colors duration-200"
            >
              League Table
            </a>
          </li>
        </ul>

        {/* Mobile menu button aligned to the right */}
        <button
          className="md:hidden text-white focus:outline-none"
          aria-label="Open Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
