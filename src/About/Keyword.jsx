import { Link } from "react-router-dom";

function Keyword() {
  return (
    <section className="border-t border-slate-200 bg-slate-50 py-16 sm:py-20">

      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">

        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10 lg:p-12">

          <p className="text-sm font-extrabold uppercase tracking-[3px] text-blue-600">
            Pak Aviator Resources
          </p>

          <h2 className="mt-4 text-3xl font-black leading-tight text-slate-950 sm:text-4xl">
            Explore More Pak Aviator Information
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
            Pak Aviator provides a central place for visitors interested in
            Aviator game information, online gaming topics, mobile access,
            gaming guides and useful articles. The website is organized into
            dedicated sections so visitors can move naturally from one topic
            to another while finding information relevant to their search.
          </p>

          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            If you are new to the website, start with the{" "}
            <Link
              to="/"
              className="font-semibold text-blue-600 hover:text-blue-800 hover:underline"
            >
              Pak Aviator Home
            </Link>{" "}
            page. Visitors who want to understand the purpose and background
            of the website can read the{" "}
            <Link
              to="/about"
              className="font-semibold text-blue-600 hover:text-blue-800 hover:underline"
            >
              About Pak Aviator
            </Link>{" "}
            information.
          </p>

          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            For additional gaming topics, guides and updates, visit the{" "}
            <Link
              to="/blog"
              className="font-semibold text-blue-600 hover:text-blue-800 hover:underline"
            >
              Pak Aviator Blog
            </Link>
            . The blog is designed to provide more detailed articles around
            gaming information, digital entertainment and related topics.
          </p>

          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            Visitors who have questions, suggestions or website-related
            feedback can use the{" "}
            <Link
              to="/contact"
              className="font-semibold text-blue-600 hover:text-blue-800 hover:underline"
            >
              Contact Pak Aviator
            </Link>{" "}
            page to get in touch.
          </p>

          {/* Page Links */}
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-slate-200 pt-7 text-sm font-semibold">

            <Link
              to="/"
              className="text-blue-600 hover:text-blue-800 hover:underline"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="text-blue-600 hover:text-blue-800 hover:underline"
            >
              About Us
            </Link>

            <Link
              to="/blog"
              className="text-blue-600 hover:text-blue-800 hover:underline"
            >
              Blog
            </Link>

            <Link
              to="/contact"
              className="text-blue-600 hover:text-blue-800 hover:underline"
            >
              Contact Us
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Keyword;