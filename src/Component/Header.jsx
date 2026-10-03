import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const logoImage =
    "https://pakaviatorgame.com.pk/wp-content/uploads/2026/04/Pak-Aviator-1024x683.webp";

  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About Us",
      path: "/about",
    },
    {
      name: "Blog",
      path: "/blog",
    },
    {
      name: "Contact Us",
      path: "/contact",
    },
    {
      name: "Download",
      path: "/download",
    },
  ];

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* Skip Navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-yellow-400 focus:px-4 focus:py-2 focus:font-bold focus:text-slate-950"
      >
        Skip to main content
      </a>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/95 text-white shadow-lg backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

          {/* Logo */}
          <NavLink
            to="/"
            end
            onClick={closeMenu}
            aria-label="Royal X Casino home page"
            className="group flex items-center gap-3"
          >
            <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl bg-white shadow-lg shadow-yellow-400/20 transition duration-300 group-hover:scale-105">
              <img
                src={logoImage}
                alt="Royal X Casino logo"
                width="48"
                height="48"
                loading="eager"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>

            <div>
              <span className="block text-lg font-extrabold leading-none sm:text-xl">
                PAK
                <span className="text-yellow-400"> AVIATOR</span>
              </span>

              <span className="mt-1 block text-[10px] font-medium uppercase tracking-[0.2em] text-white">
                Gaming Platform
              </span>
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-1 lg:flex"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                className={({ isActive }) =>
                  [
                    "relative rounded-lg px-4 py-2.5 text-sm font-semibold transition duration-300",
                    isActive
                      ? "bg-yellow-400 text-slate-950"
                      : "text-slate-300 hover:bg-white/5 hover:text-yellow-400",
                  ].join(" ")
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Download Button */}
          <div className="hidden lg:block">
            <NavLink
              to="/download"
              onClick={closeMenu}
              className="inline-flex items-center rounded-xl bg-yellow-400 px-5 py-2.5 text-sm font-bold text-slate-950 shadow-lg shadow-yellow-400/10 transition duration-300 hover:-translate-y-0.5 hover:bg-yellow-300 hover:shadow-xl hover:shadow-yellow-400/20"
            >
              Play Now
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-lg text-white transition duration-300 hover:border-yellow-400/30 hover:text-yellow-400 lg:hidden"
            aria-label={
              menuOpen
                ? "Close primary navigation"
                : "Open primary navigation"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          id="mobile-navigation"
          className={`overflow-hidden border-t border-white/10 transition-all duration-300 lg:hidden ${
            menuOpen
              ? "max-h-[600px] opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <nav
            aria-label="Mobile primary navigation"
            className="mx-auto max-w-7xl px-6 py-5 lg:px-8"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === "/"}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    [
                      "rounded-xl px-4 py-3 text-sm font-semibold transition duration-300",
                      isActive
                        ? "bg-yellow-400 text-slate-950"
                        : "text-slate-300 hover:bg-white/5 hover:text-yellow-400",
                    ].join(" ")
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            {/* Mobile Download */}
            <NavLink
              to="/download"
              onClick={closeMenu}
              className="mt-4 flex items-center justify-center rounded-xl bg-yellow-400 px-5 py-3 font-bold text-slate-950 transition duration-300 hover:bg-yellow-300"
            >
             Play Now
            </NavLink>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;