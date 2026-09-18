import { Link } from "react-router-dom";

const LOGO_URL =
  "https://pakaviatorapp.pk/wp-content/uploads/2026/06/pak-aviator.webp";

const DOWNLOAD_URL = "https://pakaviator3.com/?code=ZMSJ653Y3V7&t=1789713107";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#020617] text-white">
      {/* ================= TOP FOOTER ================= */}
      <div className="mx-auto max-w-7xl px-6 py-8 sm:px-8 lg:px-10">
        <div className="grid gap-12 md:grid-cols-3 md:gap-10 lg:gap-16">
          {/* ================= BRAND ================= */}
          <div className="md:col-span-1">
            <Link
              to="/"
              className="inline-flex items-center gap-3"
              onClick={scrollToTop}
            >
              <img
                src={LOGO_URL}
                alt="Pak Aviator"
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
              Explore useful game information, guides, download guidance, and
              helpful articles through a simple and user-friendly platform.
            </p>
          </div>

          {/* ================= QUICK LINKS ================= */}
          <div>
            <h3 className="mb-7 text-lg font-extrabold uppercase tracking-wide text-blue-400">
              Quick Links
            </h3>

            <div className="flex flex-col gap-5">
              <Link
                to="/"
                onClick={scrollToTop}
                className="w-fit text-[15px] text-slate-400 transition duration-300 hover:translate-x-1 hover:text-white"
              >
                Home
              </Link>

              <Link
                to="/about"
                onClick={scrollToTop}
                className="w-fit text-[15px] text-slate-400 transition duration-300 hover:translate-x-1 hover:text-white"
              >
                About Us
              </Link>

              <Link
                to="/blog"
                onClick={scrollToTop}
                className="w-fit text-[15px] text-slate-400 transition duration-300 hover:translate-x-1 hover:text-white"
              >
                Blog
              </Link>

              <Link
                to="/contact"
                onClick={scrollToTop}
                className="w-fit text-[15px] text-slate-400 transition duration-300 hover:translate-x-1 hover:text-white"
              >
                Contact Us
              </Link>

              <a
                href={DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit text-[15px] text-slate-400 transition duration-300 hover:translate-x-1 hover:text-white"
              >
                Download
              </a>
            </div>
          </div>

          {/* ================= INFORMATION ================= */}
          <div>
            <h3 className="mb-7 text-lg font-extrabold uppercase tracking-wide text-blue-400">
              Information
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
                Gaming Guide
              </Link>

              <Link
                to="/contact"
                onClick={scrollToTop}
                className="w-fit text-[15px] text-slate-400 transition duration-300 hover:translate-x-1 hover:text-white"
              >
                General Information
              </Link>
            </div>
          </div>
        </div>

        {/* ================= DIVIDER ================= */}
        <div className="mt-12 border-t border-slate-800" />

        {/* ================= BOTTOM FOOTER ================= */}
        <div className="flex flex-col gap-6 pt-6 md:flex-row md:items-center md:justify-between">
          {/* COPYRIGHT */}
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Pak Aviator. All rights reserved.
          </p>

          {/* BOTTOM LINKS */}
          <div className="flex flex-wrap items-center gap-6 text-sm">
            <Link
              to="/"
              onClick={scrollToTop}
              className="text-slate-500 transition hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              to="/"
              onClick={scrollToTop}
              className="text-slate-500 transition hover:text-white"
            >
              Terms & Conditions
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
