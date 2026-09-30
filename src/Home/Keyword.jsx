import { Link } from "react-router-dom";

function Keyword() {
  return (
    <section className="border-t border-slate-200 bg-slate-50 py-16 sm:py-20">
      {" "}
      <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-10">
        <div className="max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[3px] text-blue-600">
            Pak Aviator Resources
          </p>

          <h2 className="mt-4 text-3xl font-black leading-tight text-slate-900 sm:text-4xl">
            Explore More Pak Aviator Information
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
            Explore the different Pak Aviator pages to find gaming information,
            platform details, useful articles, and contact resources. Each page
            provides its own subject and connects naturally with the other
            sections of the website.
          </p>

          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            Learn more on the{" "}
            <Link
              to="/about"
              className="font-semibold text-blue-600 hover:underline"
            >
              About Pak Aviator
            </Link>{" "}
            page, discover additional gaming information through the{" "}
            <Link
              to="/blog"
              className="font-semibold text-blue-600 hover:underline"
            >
              Pak Aviator Blog
            </Link>
            , or use the{" "}
            <Link
              to="/contact"
              className="font-semibold text-blue-600 hover:underline"
            >
              Contact page
            </Link>{" "}
            if you need to get in touch.
          </p>

          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            Visitors can return to the{" "}
            <Link
              to="/"
              className="font-semibold text-blue-600 hover:underline"
            >
              Pak Aviator Home
            </Link>{" "}
            page at any time to explore the main website content and continue
            browsing related information.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Keyword;
