import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const DOWNLOAD_URL =
  "https://pakaviator3.com/?code=ZMSJ653Y3V7&t=1789713107";

const LOGO_URL =
  "https://pakaviatorapp.pk/wp-content/uploads/2026/06/pak-aviator.webp";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Contact Us", path: "/contact" },
  ];

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white shadow-md">

      {/* ================= MAIN HEADER ================= */}
      <div className="relative mx-auto flex h-[82px] w-full max-w-7xl items-center px-4 sm:h-[88px] sm:px-6 lg:px-8">

        {/* ================= LEFT ================= */}
        <Link
          to="/"
          onClick={closeMenu}
          className="flex shrink-0 items-center gap-3 sm:gap-3.5"
        >
          <img
            src={LOGO_URL}
            alt="Pak Aviator Logo"
            className="block h-12 w-12 shrink-0 rounded-xl object-contain sm:h-14 sm:w-14"
          />

          <div className="leading-tight">
            <span className="block whitespace-nowrap text-lg font-extrabold tracking-tight text-gray-900 sm:text-2xl">
              Pak Aviator
            </span>

            <span className="block whitespace-nowrap text-[11px] font-medium text-gray-500 sm:text-sm">
              Download Now
            </span>
          </div>
        </Link>

        {/* ================= CENTER ================= */}
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 lg:flex">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;

            return (
              <Link
                key={link.path}
                to={link.path}
                className={`group relative whitespace-nowrap py-3 text-base font-semibold transition duration-300 ${
                  isActive
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {link.name}

                <span
                  className={`absolute bottom-0 left-0 h-[2px] rounded-full bg-blue-600 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* ================= RIGHT ================= */}
        <div className="ml-auto flex items-center">
          <a
            href={DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-blue-600 px-6 py-3.5 text-base font-bold text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg lg:block"
          >
            Download Game
          </a>

          {/* ================= MOBILE MENU BUTTON ================= */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="flex h-12 w-12 items-center justify-center rounded-xl border border-gray-200 bg-gray-50 text-gray-800 transition duration-300 hover:bg-gray-100 sm:h-13 sm:w-13 lg:hidden"
          >
            {menuOpen ? <FiX size={27} /> : <FiMenu size={27} />}
          </button>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`overflow-hidden border-t border-gray-100 bg-white transition-all duration-300 lg:hidden ${
          menuOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6">

          {/* Navigation Links */}
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;

            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className={`block border-b border-gray-100 px-3 py-4 text-base font-semibold transition duration-300 last:border-b-0 ${
                  isActive
                    ? "text-blue-600"
                    : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          {/* Mobile Download Button */}
          <a
            href={DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="mt-4 block rounded-xl bg-blue-600 px-5 py-3.5 text-center text-base font-bold text-white shadow-md transition duration-300 hover:bg-blue-700 hover:shadow-lg"
          >
            Download Game
          </a>

        </nav>
      </div>
    </header>
  );
}

export default Header;