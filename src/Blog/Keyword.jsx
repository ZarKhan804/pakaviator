import { Link } from "react-router-dom";

function Keyword() {
  return (
    <section className="bg-gradient-to-br from-slate-50 via-gray-100 to-blue-50 px-5 py-16 sm:px-6 sm:py-20 lg:px-8">

      <div className="mx-auto max-w-6xl">

        <div className="rounded-3xl border border-slate-200 bg-white/70 p-7 shadow-sm sm:p-10 lg:p-12">

          <p className="text-sm font-bold uppercase tracking-[3px] text-blue-600">
            Pak Aviator Resources
          </p>

          <h2 className="mt-4 text-3xl font-black leading-tight text-slate-950 sm:text-4xl">
            Explore More Pak Aviator Topics
          </h2>

          <p className="mt-6 max-w-4xl text-base leading-8 text-slate-600 sm:text-lg">
            The Pak Aviator website provides connected resources for visitors
            interested in the Aviator game, mobile gaming, online gaming
            information and general platform topics. Each main page has its
            own purpose, allowing visitors to move naturally between
            information, articles and contact resources.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            <Link
              to="/"
              className="rounded-2xl border border-slate-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
            >
              <h3 className="font-extrabold text-slate-900">
                Pak Aviator Home
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Start exploring Pak Aviator and its main resources.
              </p>
            </Link>

            <Link
              to="/about"
              className="rounded-2xl border border-slate-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
            >
              <h3 className="font-extrabold text-slate-900">
                About Pak Aviator
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Learn more about the website and its information resources.
              </p>
            </Link>

            <Link
              to="/blog"
              className="rounded-2xl border border-slate-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
            >
              <h3 className="font-extrabold text-slate-900">
                Aviator Blog
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Read gaming articles, guides and useful information.
              </p>
            </Link>

            <Link
              to="/contact"
              className="rounded-2xl border border-slate-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
            >
              <h3 className="font-extrabold text-slate-900">
                Contact Us
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Get in touch for questions and general information.
              </p>
            </Link>

          </div>

          <p className="mt-8 text-base leading-8 text-slate-600 sm:text-lg">
            Visitors can begin with the{" "}
            <Link
              to="/"
              className="font-semibold text-blue-600 hover:text-blue-800 hover:underline"
            >
              Pak Aviator Home
            </Link>
            , learn more through the{" "}
            <Link
              to="/about"
              className="font-semibold text-blue-600 hover:text-blue-800 hover:underline"
            >
              About page
            </Link>
            , continue reading{" "}
            <Link
              to="/blog"
              className="font-semibold text-blue-600 hover:text-blue-800 hover:underline"
            >
              Blog articles
            </Link>
            , or visit{" "}
            <Link
              to="/contact"
              className="font-semibold text-blue-600 hover:text-blue-800 hover:underline"
            >
              Contact Us
            </Link>
            {" "}for additional information.
          </p>

        </div>

      </div>
    </section>
  );
}

export default Keyword;