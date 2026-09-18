import { Link } from "react-router-dom";

const DOWNLOAD_URL =
  "https://pakaviator3.com/?code=ZMSJ653Y3V7&t=1789713107";

const LOGO_URL =
  "https://pakaviatorapp.pk/wp-content/uploads/2026/06/pak-aviator.webp";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-gray-100 to-blue-50">

      {/* ================= HERO CONTAINER ================= */}
      <div className="mx-auto flex min-h-[calc(100vh-88px)] max-w-7xl flex-col px-5 py-5 sm:px-6 sm:py-7 lg:grid lg:grid-cols-2 lg:items-center lg:gap-12 lg:px-8 lg:py-5">

        {/* ================================================= */}
        {/* LEFT CONTENT */}
        {/* ================================================= */}
        <div className="max-w-2xl lg:order-1">

          {/* ================= HEADING ================= */}
          <h1 className="text-4xl font-black leading-[1.02] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl xl:text-7xl">
            Welcome to

            <span className="mt-1 block text-blue-600">
              Pak Aviator
            </span>
          </h1>


          {/* ================================================= */}
          {/* MOBILE IMAGE */}
          {/* ================================================= */}
          <div className="my-5 flex justify-center lg:hidden">

            <a
              href={DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Pak Aviator"
              className="group block"
            >
              <img
                src={LOGO_URL}
                alt="Pak Aviator Game"
                className="h-[280px] w-auto max-w-full object-contain transition duration-700 group-hover:scale-105 sm:h-[350px]"
              />
            </a>

          </div>


          {/* ================= BUTTONS ================= */}
          <div className="mt-5 flex flex-col gap-3 sm:flex-row lg:mt-6">

            {/* Download */}
            <a
              href={DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-blue-600 px-7 py-3.5 text-center text-sm font-extrabold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl sm:text-base"
            >
              Download Game
            </a>


            {/* Explore */}
            <Link
              to="/about"
              className="rounded-xl border border-slate-300 bg-white px-7 py-3.5 text-center text-sm font-extrabold text-slate-800 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-600 hover:bg-blue-600 hover:text-white hover:shadow-lg sm:text-base"
            >
              Explore Pak Aviator
            </Link>

          </div>


          {/* ================= DESCRIPTION ================= */}
          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base lg:mt-5 lg:text-lg">
            Explore Pak Aviator for useful information about the Aviator
            game, gameplay details, download guidance, helpful guides,
            and the latest game updates in one simple place.
          </p>


          {/* ================= FEATURES ================= */}
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3 lg:mt-7">

            {/* Feature 1 */}
            <div className="rounded-xl border border-slate-200 bg-white px-4 py-3.5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
              <h3 className="text-sm font-extrabold text-slate-900">
                Simple
              </h3>

              <p className="mt-0.5 text-xs text-slate-500">
                Easy Information
              </p>
            </div>


            {/* Feature 2 */}
            <div className="rounded-xl border border-slate-200 bg-white px-4 py-3.5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
              <h3 className="text-sm font-extrabold text-slate-900">
                Fast
              </h3>

              <p className="mt-0.5 text-xs text-slate-500">
                Quick Access
              </p>
            </div>


            {/* Feature 3 */}
            <div className="rounded-xl border border-slate-200 bg-white px-4 py-3.5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
              <h3 className="text-sm font-extrabold text-slate-900">
                Updated
              </h3>

              <p className="mt-0.5 text-xs text-slate-500">
                Latest Guides
              </p>
            </div>

          </div>

        </div>


        {/* ================================================= */}
        {/* DESKTOP IMAGE */}
        {/* ================================================= */}
        <div className="hidden items-center justify-center lg:order-2 lg:flex lg:justify-end">

          <a
            href={DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Pak Aviator"
            className="group block"
          >
            <img
              src={LOGO_URL}
              alt="Pak Aviator Game"
            className="h-[400px] w-auto max-w-full object-contain transition duration-700 group-hover:scale-105"
            />
          </a>

        </div>

      </div>

    </section>
  );
}

export default Hero;