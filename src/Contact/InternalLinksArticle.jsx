
import { Link } from "react-router-dom";

function InternalLinksArticle() {
  return (
    <section
      aria-labelledby="contact-related-pages"
      className="bg-gray-200 py-10 sm:py-14"
    >
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <article className="rounded-2xl border border-gray-300 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
          <h2
            id="contact-related-pages"
            className="text-2xl font-extrabold leading-tight text-gray-900 sm:text-3xl"
          >
            Pak Aviator Contact & Related Pages
          </h2>

          <div className="mt-5 space-y-5 text-base leading-8 text-gray-600">
            <p>
              The Pak Aviator Contact page gives visitors a convenient
              way to send questions, feedback, and general enquiries.
              Visitors can use the contact form to request additional
              information about the website and its available sections.
            </p>

            <p>
              Visitors looking for{" "}
              <strong>Pak Aviator Support</strong> can use this page
              to submit questions about website information, account
              guidance, and available resources. Please provide clear
              details so your enquiry can be understood.
            </p>

            <p>
              To explore the website, visit the{" "}
              <Link
                to="/"
                className="font-semibold text-yellow-600 underline decoration-yellow-400 underline-offset-4 hover:text-yellow-700"
              >
                Pak Aviator Home
              </Link>{" "}
              page for an overview of the platform and its available
              information.
            </p>

            <p>
              Visitors who want to learn more about the website can
              explore the{" "}
              <Link
                to="/about"
                className="font-semibold text-yellow-600 underline decoration-yellow-400 underline-offset-4 hover:text-yellow-700"
              >
                About Pak Aviator
              </Link>{" "}
              page for additional background information, website
              details, and related resources.
            </p>

            <p>
              For gaming information and helpful articles, visit the{" "}
              <Link
                to="/blog"
                className="font-semibold text-yellow-600 underline decoration-yellow-400 underline-offset-4 hover:text-yellow-700"
              >
                Pak Aviator Blog
              </Link>{" "}
              section. It can cover gameplay guides, mobile access,
              account safety, platform information, and responsible
              gaming topics.
            </p>

            <p>
              If your website includes a dedicated download page, visit{" "}
              <Link
                to="/download"
                className="font-semibold text-yellow-600 underline decoration-yellow-400 underline-offset-4 hover:text-yellow-700"
              >
                Pak Aviator Download
              </Link>{" "}
              for relevant access and installation information. Always
              verify the source and compatibility of any application
              before installing it.
            </p>

            <p>
              Visitors looking for{" "}
              <strong>Pak Aviator Contact Us</strong> information can
              use the contact form on this page to send a message.
              Include the relevant details in your enquiry, but avoid
              sharing passwords or other sensitive account information.
            </p>

            <p>
              These internal links connect the Home, About, Blog,
              Download, and Contact sections, helping visitors navigate
              related Pak Aviator information and find the content
              relevant to their questions.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default InternalLinksArticle;

