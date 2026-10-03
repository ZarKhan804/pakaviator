
function ContactHero() {
  return (
    <section
      aria-labelledby="contact-page-title"
      className="relative overflow-hidden bg-gray-200 py-7 sm:py-9 lg:py-11"
    >
      {/* Background Effects */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-0 h-64 w-64 rounded-full bg-yellow-400/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 h-64 w-64 rounded-full bg-amber-400/10 blur-3xl"
      />

      {/* Main Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Content */}
        <header className="mx-auto max-w-5xl text-center">
          <div className="inline-flex rounded-full border border-yellow-500/30 bg-yellow-400/15 px-3 py-1.5 text-xs font-bold text-yellow-700 shadow-sm sm:px-4 sm:py-2 sm:text-sm">
            Contact Pak Aviator
          </div>

          {/* Main SEO Heading */}
          <h1
            id="contact-page-title"
            className="mt-3 text-3xl font-black leading-tight tracking-tight text-gray-900 sm:mt-4 sm:text-5xl lg:text-6xl"
          >
            Contact Pak Aviator
            <span className="block bg-gradient-to-r from-yellow-600 via-amber-500 to-yellow-700 bg-clip-text text-transparent">
              Support & Assistance
            </span>
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-600 sm:mt-4 sm:text-base lg:text-lg">
            Have a question, suggestion, or need information about Pak
            Aviator? Use the contact form to send your message and ask
            about platform information, account guidance, gaming resources,
            or general support.
          </p>
        </header>

        {/* Support Information */}
        <div className="mx-auto mt-5 grid max-w-4xl gap-3 sm:mt-6 sm:grid-cols-2">
          <article className="group rounded-2xl border border-gray-300 bg-white p-4 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <h2 className="text-sm font-bold text-gray-900 sm:text-base">
              Pak Aviator Support
            </h2>

            <p className="mt-0.5 text-xs leading-5 text-gray-500 sm:text-sm">
              Find general information about Pak Aviator, account access,
              platform features, and available website resources.
            </p>
          </article>

          <article className="group rounded-2xl border border-gray-300 bg-white p-4 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <h2 className="text-sm font-bold text-gray-900 sm:text-base">
              Questions & Feedback
            </h2>

            <p className="mt-0.5 text-xs leading-5 text-gray-500 sm:text-sm">
              Send your questions, suggestions, or feedback through the
              Pak Aviator contact form.
            </p>
          </article>
        </div>

        {/* Support Notice */}
        <div className="mx-auto mt-4 max-w-4xl rounded-2xl border border-yellow-400/30 bg-gray-900 px-4 py-3 text-center shadow-xl sm:px-6 sm:py-4">
          <p className="text-xs font-semibold leading-5 text-gray-200 sm:text-sm">
            Pak Aviator Support — Questions, Feedback & General Assistance
          </p>
        </div>
      </div>
    </section>
  );
}

export default ContactHero;

