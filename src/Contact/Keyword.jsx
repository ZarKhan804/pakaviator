
import { Link } from "react-router-dom";

const goTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

function Keyword() {
  return (
    <section className="bg-slate-50 px-5 pb-20 sm:px-6 lg:px-8">

      <div className="mx-auto max-w-5xl border-t border-slate-200 pt-12">

        <p className="text-sm font-bold uppercase tracking-[3px] text-blue-600">
          Pak Aviator Resources
        </p>

        <h2 className="mt-4 text-3xl font-black leading-tight text-slate-950 sm:text-4xl">
          Explore More Pak Aviator Information
        </h2>

        <p className="mt-5 max-w-4xl text-base leading-8 text-slate-600 sm:text-lg">
          Pak Aviator provides different sections for visitors who want
          to learn more about the website, read gaming-related articles,
          and find general information. Use the internal pages below to
          move directly between the main sections of the website.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          <Link
            to="/"
            onClick={goTop}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
          >
            <h3 className="font-extrabold text-slate-900">
              Home
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Explore the main Pak Aviator website.
            </p>
          </Link>

          <Link
            to="/about"
            onClick={goTop}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
          >
            <h3 className="font-extrabold text-slate-900">
              About Us
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Learn more about Pak Aviator and its purpose.
            </p>
          </Link>

          <Link
            to="/blog"
            onClick={goTop}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
          >
            <h3 className="font-extrabold text-slate-900">
              Blog
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Read Aviator gaming articles and useful guides.
            </p>
          </Link>

          <Link
            to="/contact"
            onClick={goTop}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
          >
            <h3 className="font-extrabold text-slate-900">
              Contact
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Get in touch for questions and feedback.
            </p>
          </Link>

        </div>

      </div>
    </section>
  );
}

export default Keyword;

