import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-gray-100 to-blue-50 px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-10">

      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-100/60 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-slate-200/70 blur-3xl" />

      <div className="relative mx-auto max-w-5xl text-center">

        <p className="text-sm font-extrabold uppercase tracking-[3px] text-blue-600">
          Pak Aviator Blog
        </p>

        <h1 className="mt-5 text-4xl font-black leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
          Aviator Game
          <span className="mt-2 block text-blue-600">
            Articles & Guides
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
          Explore useful articles about the Aviator game, online gaming,
          mobile access, gameplay information, gaming technology, platform
          features and general updates. The Pak Aviator Blog is designed to
          provide clear and practical information for visitors who want to
          understand different aspects of the gaming topic.
        </p>

        <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">

          <Link
            to="/"
            className="rounded-2xl border border-slate-200 bg-white px-6 py-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            <p className="text-sm font-extrabold text-slate-900">
              Pak Aviator Home
            </p>

            <p className="mt-1 text-xs text-slate-500">
              Explore the main page
            </p>
          </Link>

          <Link
            to="/about"
            className="rounded-2xl border border-slate-200 bg-white px-6 py-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            <p className="text-sm font-extrabold text-slate-900">
              About Pak Aviator
            </p>

            <p className="mt-1 text-xs text-slate-500">
              Learn about the website
            </p>
          </Link>

          <Link
            to="/contact"
            className="rounded-2xl border border-slate-200 bg-white px-6 py-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            <p className="text-sm font-extrabold text-slate-900">
              Contact Us
            </p>

            <p className="mt-1 text-xs text-slate-500">
              Send your questions
            </p>
          </Link>

        </div>

      </div>
    </section>
  );
}

export default Hero;