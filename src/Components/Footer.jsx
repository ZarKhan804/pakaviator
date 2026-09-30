import { Link } from "react-router-dom";

const LOGO_URL =
  "https://pakaviatorapp.pk/wp-content/uploads/2026/06/pak-aviator.webp";

const DOWNLOAD_URL = "https://pakaviator3.com/?code=ZMSJ653Y3V7&t=1789713107";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const internalLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <footer className="bg-[#020617] text-white">
      {/* ================= TOP FOOTER ================= */}
      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-10">
        <div className="grid gap-12 md:grid-cols-3 md:gap-10 lg:gap-16">
          {/* ================= BRAND ================= */}
          <div>
            <Link
              to="/"
              onClick={scrollToTop}
              className="inline-flex items-center gap-3"
            >
              <img
                src={LOGO_URL}
                alt="Pak Aviator Logo"
                width="56"
                height="56"
                className="h-14 w-14 rounded-xl object-contain"
              />

              <div className="leading-tight">
                <h2 className="text-2xl font-extrabold tracking-tight">
                  Pak Aviator
                </h2>

                <p className="mt-1 text-sm uppercase tracking-[3px] text-blue-400">
                  Aviator Game
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-xl text-[15px] leading-7 text-slate-400">
              Pak Aviator is an information website focused on the Aviator game.
              Explore useful game information, gaming guides, download guidance,
              updates, and helpful articles through a simple and user-friendly
              platform.
            </p>
          </div>

          {/* ================= MAIN PAGES ================= */}
          <div>
            <h3 className="mb-7 text-lg font-extrabold uppercase tracking-wide text-blue-400">
              Main Pages
            </h3>

            <div className="flex flex-col gap-5">
              {internalLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={scrollToTop}
                  className="w-fit text-[15px] text-slate-400 transition duration-300 hover:translate-x-1 hover:text-white"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* ================= EXPLORE ================= */}
          <div>
            <h3 className="mb-7 text-lg font-extrabold uppercase tracking-wide text-blue-400">
              Explore
            </h3>

            <div className="flex flex-col gap-5">
              <Link
                to="/"
                onClick={scrollToTop}
                className="w-fit text-[15px] text-slate-400 transition duration-300 hover:translate-x-1 hover:text-white"
              >
                Aviator Game
              </Link>

              <Link
                to="/about"
                onClick={scrollToTop}
                className="w-fit text-[15px] text-slate-400 transition duration-300 hover:translate-x-1 hover:text-white"
              >
                Game Information
              </Link>

              <Link
                to="/blog"
                onClick={scrollToTop}
                className="w-fit text-[15px] text-slate-400 transition duration-300 hover:translate-x-1 hover:text-white"
              >
                Gaming Guides
              </Link>

              <a
                href={DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download Pak Aviator Game"
                className="w-fit text-[15px] text-slate-400 transition duration-300 hover:translate-x-1 hover:text-white"
              >
                Download Game
              </a>
            </div>
          </div>
        </div>

        {/* ================= DIVIDER ================= */}
        <div className="mt-12 border-t border-slate-800" />

        {/* ================= BOTTOM ================= */}
        <div className="flex flex-col gap-6 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Pak Aviator. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-6 text-sm">
            <Link
              to="/about"
              onClick={scrollToTop}
              className="text-slate-500 transition hover:text-white"
            >
              About
            </Link>

            <Link
              to="/blog"
              onClick={scrollToTop}
              className="text-slate-500 transition hover:text-white"
            >
              Blog
            </Link>

            <Link
              to="/contact"
              onClick={scrollToTop}
              className="text-slate-500 transition hover:text-white"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* ================= BACK TO TOP ================= */}
        <div className="mt-8 flex justify-end">
          <button
            type="button"
            onClick={scrollToTop}
            className="rounded-xl border border-slate-800 bg-slate-900 px-5 py-3 text-sm font-medium text-slate-400 transition duration-300 hover:border-slate-700 hover:bg-slate-800 hover:text-white"
          >
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
