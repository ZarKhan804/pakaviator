import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-50 px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">

      {/* Background Shapes */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-100/60 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-slate-200/70 blur-3xl" />

      <div className="relative mx-auto max-w-5xl text-center">

        {/* Badge */}
        <p className="text-sm font-extrabold uppercase tracking-[3px] text-blue-600">
          About Pak Aviator
        </p>

        {/* H1 */}
        <h1 className="mt-4 text-4xl font-black leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
          Learn More About{" "}
          <span className="text-blue-600">
            Pak Aviator
          </span>
        </h1>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
          Pak Aviator is an informational website created for visitors who
          want clear and useful information about the Aviator game, gaming
          topics, mobile access, download guidance, gameplay concepts and
          helpful online gaming resources.
        </p>

        {/* Internal Links */}
        <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm font-semibold">

          <Link
            to="/"
            className="text-blue-600 transition hover:text-blue-800 hover:underline"
          >
            Pak Aviator Home
          </Link>

          <Link
            to="/blog"
            className="text-blue-600 transition hover:text-blue-800 hover:underline"
          >
            Gaming Blog
          </Link>

          <Link
            to="/contact"
            className="text-blue-600 transition hover:text-blue-800 hover:underline"
          >
            Contact Us
          </Link>

        </div>

        {/* Highlights */}
        <div className="mt-10 grid gap-4 sm:grid-cols-3">

          <div className="rounded-2xl border border-slate-200 bg-white px-6 py-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
            <h2 className="text-sm font-extrabold text-slate-900">
              Clear Information
            </h2>

            <p className="mt-2 text-xs leading-5 text-slate-500">
              Simple and easy-to-understand gaming content.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white px-6 py-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
            <h2 className="text-sm font-extrabold text-slate-900">
              Useful Guides
            </h2>

            <p className="mt-2 text-xs leading-5 text-slate-500">
              Helpful resources for visitors exploring Aviator topics.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white px-6 py-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
            <h2 className="text-sm font-extrabold text-slate-900">
              Mobile Friendly
            </h2>

            <p className="mt-2 text-xs leading-5 text-slate-500">
              Responsive information across modern devices.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;