
import { NavLink } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About Pak Aviator",
      path: "/about",
    },
    {
      name: "Pak Aviator Blog",
      path: "/blog",
    },
    {
      name: "Contact Us",
      path: "/contact",
    },
    {
      name: "Pak Aviator Download Guide",
      path: "/download",
    },
  ];

  const informationLinks = [
    {
      name: "Pak Aviator Game Information",
      path: "/",
    },
    {
      name: "About the Platform",
      path: "/about",
    },
    {
      name: "Gameplay Guides & Articles",
      path: "/blog",
    },
    {
      name: "Mobile Access Guide",
      path: "/download",
    },
    {
      name: "Pak Aviator Contact",
      path: "/contact",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-slate-950 text-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 pb-4 pt-12 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand / About */}
          <div className="lg:col-span-2">
            <NavLink
              to="/"
              end
              aria-label="Pak Aviator home page"
              className="inline-flex items-center gap-3"
            >
              <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl bg-white shadow-lg shadow-yellow-400/20">
                <img
                  src="https://pakaviatorgame.com.pk/wp-content/uploads/2026/04/Pak-Aviator-1024x683.webp"
                  alt="Pak Aviator game logo"
                  width="48"
                  height="48"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </div>

              <div>
                <span className="block text-xl font-extrabold leading-none">
                  Pak
                  <span className="text-yellow-400"> Aviator</span>
                </span>

                <span className="mt-1 block text-[10px] uppercase tracking-[0.2em] text-slate-500">
                  Game Information & Guides
                </span>
              </div>
            </NavLink>

            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400">
              Pak Aviator provides general information about Aviator-style
              crash games, gameplay basics, mobile access, account security,
              and online gaming safety. Explore our guides to understand
              game features, rules, and potential financial risks.
            </p>

            {/* Internal Content Links */}
            <div className="mt-6 grid max-w-xl gap-3 sm:grid-cols-3">
              <NavLink
                to="/about"
                className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 transition duration-300 hover:border-yellow-400/30 hover:bg-white/[0.06]"
              >
                <span className="text-xs font-semibold text-slate-300">
                  About Pak Aviator
                </span>
              </NavLink>

              <NavLink
                to="/blog"
                className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 transition duration-300 hover:border-yellow-400/30 hover:bg-white/[0.06]"
              >
                <span className="text-xs font-semibold text-slate-300">
                  Pak Aviator Blog
                </span>
              </NavLink>

              <NavLink
                to="/download"
                className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 transition duration-300 hover:border-yellow-400/30 hover:bg-white/[0.06]"
              >
                <span className="text-xs font-semibold text-slate-300">
                  Access Guide
                </span>
              </NavLink>
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer navigation">
            <h2 className="text-sm font-bold uppercase tracking-wider text-yellow-400">
              Quick Links
            </h2>

            <ul className="mt-5 space-y-3">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    end={link.path === "/"}
                    className="text-sm text-slate-400 transition duration-300 hover:pl-1 hover:text-yellow-400"
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Information */}
          <nav aria-label="Pak Aviator information">
            <h2 className="text-sm font-bold uppercase tracking-wider text-yellow-400">
              Information
            </h2>

            <ul className="mt-5 space-y-3">
              {informationLinks.map((link) => (
                <li key={`${link.path}-${link.name}`}>
                  <NavLink
                    to={link.path}
                    end={link.path === "/"}
                    className="text-sm text-slate-400 transition duration-300 hover:text-yellow-400"
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Footer Internal Navigation */}
        <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.02] p-5">
          <h2 className="text-sm font-bold text-white">
            Explore Pak Aviator
          </h2>

          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-3">
            <NavLink
              to="/"
              end
              className="text-sm text-slate-400 transition hover:text-yellow-400"
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className="text-sm text-slate-400 transition hover:text-yellow-400"
            >
              About Us
            </NavLink>

            <NavLink
              to="/blog"
              className="text-sm text-slate-400 transition hover:text-yellow-400"
            >
              Blog
            </NavLink>

            <NavLink
              to="/contact"
              className="text-sm text-slate-400 transition hover:text-yellow-400"
            >
              Contact Us
            </NavLink>

            <NavLink
              to="/download"
              className="text-sm text-slate-400 transition hover:text-yellow-400"
            >
              Download Guide
            </NavLink>
          </div>
        </div>

        {/* Divider */}
        <div className="my-7 h-px bg-white/10" />

        {/* Bottom */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-500 sm:text-sm">
            © {currentYear} Pak Aviator. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 sm:gap-5 sm:text-sm">
            <NavLink
              to="/about"
              className="transition duration-300 hover:text-yellow-400"
            >
              About
            </NavLink>

            <NavLink
              to="/blog"
              className="transition duration-300 hover:text-yellow-400"
            >
              Blog
            </NavLink>

            <NavLink
              to="/contact"
              className="transition duration-300 hover:text-yellow-400"
            >
              Contact
            </NavLink>

            <NavLink
              to="/download"
              className="transition duration-300 hover:text-yellow-400"
            >
              Download Guide
            </NavLink>
          </div>
        </div>

        {/* Back To Top */}
        <div className="mt-5 flex justify-center sm:justify-end">
          <button
            type="button"
            onClick={scrollToTop}
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-400 transition duration-300 hover:-translate-y-1 hover:border-yellow-400/30 hover:bg-yellow-400 hover:text-slate-950"
            aria-label="Back to top"
          >
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

