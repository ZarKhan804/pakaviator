
import { Link } from "react-router-dom";

const goTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

function Article() {
  return (
    <section className="bg-slate-50 px-5 py-16 sm:px-6 sm:py-20 lg:px-8">

      <div className="mx-auto max-w-5xl">

        <article>

          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[3px] text-blue-600">
              Pak Aviator Contact Information
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight text-slate-950 sm:text-4xl">
              Contact Pak Aviator
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              Pak Aviator welcomes questions, suggestions, and general
              feedback from website visitors. If you want to know more
              about the website, its articles, or general Aviator
              information, you can use this page to learn how to get in
              touch and explore the other sections of the website.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-black text-slate-900">
                General Questions
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                If you have a general question about Pak Aviator,
                website content, or the information available on the
                platform, you can send your inquiry through the contact
                section below.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-black text-slate-900">
                Website Feedback
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Feedback can help improve the clarity and usefulness of
                website content. Visitors can share suggestions about
                articles, navigation, or general website information.
              </p>
            </div>

          </div>

          <div className="mt-12">

            <h3 className="text-2xl font-black text-slate-900">
              Send Us a Message
            </h3>

            <p className="mt-3 max-w-3xl text-base leading-8 text-slate-600">
              Use the form below to provide your name, email address,
              and message. Clear information can make it easier to
              understand the purpose of your inquiry.
            </p>

            <form className="mt-7 space-y-5">

              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-bold text-slate-800"
                >
                  Your Name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-bold text-slate-800"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-bold text-slate-800"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  rows="6"
                  placeholder="Write your message..."
                  className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <button
                type="submit"
                className="rounded-xl bg-blue-600 px-7 py-3.5 text-sm font-bold text-white shadow-md transition duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-lg"
              >
                Send Message
              </button>

            </form>
          </div>

        </article>

        {/* ================= INTERNAL LINKS ================= */}

        <div className="mt-14 border-t border-slate-200 pt-10">

          <p className="text-sm font-bold uppercase tracking-[2px] text-blue-600">
            Explore Pak Aviator
          </p>

          <h2 className="mt-3 text-2xl font-black text-slate-900">
            Continue Exploring Our Website
          </h2>

          <p className="mt-4 max-w-4xl text-base leading-8 text-slate-600">
            You can visit the{" "}
            <Link
              to="/"
              onClick={goTop}
              className="font-bold text-blue-600 hover:text-blue-800 hover:underline"
            >
              Pak Aviator Home
            </Link>{" "}
            page to explore the main website, learn more on the{" "}
            <Link
              to="/about"
              onClick={goTop}
              className="font-bold text-blue-600 hover:text-blue-800 hover:underline"
            >
              About Us
            </Link>{" "}
            page, or read additional articles through the{" "}
            <Link
              to="/blog"
              onClick={goTop}
              className="font-bold text-blue-600 hover:text-blue-800 hover:underline"
            >
              Pak Aviator Blog
            </Link>
            . You are already on the{" "}
            <Link
              to="/contact"
              onClick={goTop}
              className="font-bold text-blue-600 hover:text-blue-800 hover:underline"
            >
              Contact Us
            </Link>{" "}
            page for questions and general inquiries.
          </p>

          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm font-bold">

            <Link
              to="/"
              onClick={goTop}
              className="text-blue-600 hover:text-blue-800 hover:underline"
            >
              Home
            </Link>

            <Link
              to="/about"
              onClick={goTop}
              className="text-blue-600 hover:text-blue-800 hover:underline"
            >
              About Us
            </Link>

            <Link
              to="/blog"
              onClick={goTop}
              className="text-blue-600 hover:text-blue-800 hover:underline"
            >
              Blog
            </Link>

            <Link
              to="/contact"
              onClick={goTop}
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

export default Article;

