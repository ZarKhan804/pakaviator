
import { Link } from "react-router-dom";

const DOWNLOAD_URL =
  "https://pakaviator3.com/?code=ZMSJ653Y3V7&t=1789713107";

const LOGO_URL =
  "https://pakaviatorapp.pk/wp-content/uploads/2026/06/pak-aviator.webp";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-50">

      <div className="mx-auto flex min-h-[calc(100vh-88px)] w-full max-w-7xl items-center px-5 py-8 sm:px-6 sm:py-10 lg:px-8">

        <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">

          {/* ================= LEFT SECTION ================= */}

          <div className="w-full max-w-2xl lg:justify-self-center">

            <p className="text-sm font-extrabold uppercase tracking-[3px] text-blue-600">
              Pak Aviator Gaming Platform
            </p>

            <h1 className="mt-4 text-4xl font-black leading-[1.02] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl xl:text-7xl">
              Welcome to
              <span className="mt-1 block text-blue-600">
                Pak Aviator
              </span>
            </h1>

            {/* ================= MOBILE IMAGE ================= */}

            <div className="my-6 flex flex-col items-center lg:hidden">

              <a
                href={DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download Pak Aviator"
                className="group block"
              >
                <div className="aspect-square h-[280px] w-[280px] overflow-hidden sm:h-[350px] sm:w-[350px]">

                  <img
                    src={LOGO_URL}
                    alt="Pak Aviator Aviator Game"
                    width="500"
                    height="500"
                    fetchPriority="high"
                    className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
                  />

                </div>
              </a>

              {/* ================= MOBILE IMAGE BUTTONS ================= */}

              <div className="mt-5 flex w-full max-w-[350px] flex-col gap-3 sm:flex-row">

                {/* Dummy Learn More Button */}

                <button
                  type="button"
                  className="flex-1 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-center text-sm font-extrabold text-slate-800 transition duration-300 hover:-translate-y-1 hover:border-blue-600 hover:bg-blue-600 hover:text-white"
                >
                  Learn More
                </button>

                {/* Download Button */}

                <a
                  href={DOWNLOAD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download Pak Aviator Game"
                  className="flex-1 rounded-xl bg-blue-600 px-6 py-3.5 text-center text-sm font-extrabold text-white transition duration-300 hover:-translate-y-1 hover:bg-blue-700"
                >
                  Download Game
                </a>

              </div>

            </div>

            {/* ================= DESCRIPTION ================= */}

            <p className="mt-6 max-w-xl text-sm leading-7 text-slate-600 sm:text-base lg:text-lg">
              Explore Pak Aviator for useful information about the Aviator game,
              gameplay details, download guidance, mobile access, helpful guides,
              and the latest gaming updates. Our website brings important
              information together in a simple and easy-to-navigate format.
            </p>

            {/* ================= DESKTOP/MAIN BUTTONS ================= */}

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">

              <a
                href={DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download Pak Aviator"
                className="rounded-xl bg-blue-600 px-7 py-3.5 text-center text-sm font-extrabold text-white transition duration-300 hover:-translate-y-1 hover:bg-blue-700 sm:text-base"
              >
                Download Game
              </a>

              <Link
                to="/about"
                className="rounded-xl border border-slate-300 bg-white px-7 py-3.5 text-center text-sm font-extrabold text-slate-800 transition duration-300 hover:border-blue-600 hover:bg-blue-600 hover:text-white sm:text-base"
              >
                Explore Pak Aviator
              </Link>

            </div>

            {/* ================= INTERNAL LINKS ================= */}

            <div className="mt-6 text-sm leading-7 text-slate-600">

              Learn more through our{" "}

              <Link
                to="/about"
                className="font-semibold text-blue-600 hover:underline"
              >
                About page
              </Link>

              , read the{" "}

              <Link
                to="/blog"
                className="font-semibold text-blue-600 hover:underline"
              >
                Pak Aviator Blog
              </Link>

              , or visit our{" "}

              <Link
                to="/contact"
                className="font-semibold text-blue-600 hover:underline"
              >
                Contact page
              </Link>
              .

            </div>

            {/* ================= FEATURES ================= */}

            <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-3">

              <div className="rounded-xl border border-slate-200 bg-white/70 px-4 py-4">
                <h2 className="text-sm font-extrabold text-slate-900">
                  Simple
                </h2>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Clear gaming information.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white/70 px-4 py-4">
                <h2 className="text-sm font-extrabold text-slate-900">
                  Useful
                </h2>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Guides and game resources.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white/70 px-4 py-4">
                <h2 className="text-sm font-extrabold text-slate-900">
                  Updated
                </h2>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Fresh gaming information.
                </p>
              </div>

            </div>

          </div>

          {/* ================= RIGHT SECTION ================= */}

          <div className="hidden w-full items-center justify-center lg:flex">

            <a
              href={DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Pak Aviator"
              className="group block"
            >

              <div className="aspect-square w-[420px] overflow-hidden xl:w-[480px]">

                <img
                  src={LOGO_URL}
                  alt="Pak Aviator Game"
                  width="600"
                  height="600"
                  className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
                />

              </div>

            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;

