function Article() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 px-5 pb-20 sm:px-6 lg:px-8">

      {/* Background Shapes */}
      <div className="pointer-events-none absolute -right-24 top-20 h-72 w-72 rounded-full bg-blue-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-slate-200/70 blur-3xl" />

      <div className="relative mx-auto max-w-5xl">

        {/* Article */}
        <div>
          <h2 className="text-3xl font-black text-center text-gray-900">
            Contact Pak Aviator
          </h2>

          <p className="mt-5 leading-8 text-gray-600">
            Pak Aviator welcomes questions, suggestions and general feedback
            from website visitors. If you want to know more about our
            articles, website content or general Aviator information, you
            can send us a message using the contact form below. We aim to
            keep our website simple, useful and easy to understand for
            visitors. Please provide accurate information when submitting
            your message so we can better understand your inquiry. Your
            feedback can also help us improve the content and overall
            experience of the Pak Aviator website.
          </p>
        </div>

        {/* Contact Boxes */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2">

          {/* General Questions */}
          <div className="rounded-2xl border border-blue-100 bg-blue-50/80 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
            <h3 className="text-lg font-bold text-gray-900">
              General Questions
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              Send us your questions about the website, articles or general
              Pak Aviator information.
            </p>
          </div>

          {/* Feedback */}
          <div className="rounded-2xl border border-blue-100 bg-blue-50/80 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
            <h3 className="text-lg font-bold text-gray-900">
              Feedback
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              Share your suggestions and feedback to help us improve the
              website and its content.
            </p>
          </div>

        </div>

        {/* Contact Form */}
        <div className="mt-10">

          <h3 className="text-2xl font-black text-gray-900">
            Send Us a Message
          </h3>

          <form className="mt-6 space-y-5">

            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-bold text-gray-800"
              >
                Your Name
              </label>

              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                className="w-full rounded-xl border border-gray-200 bg-white/80 px-4 py-3.5 text-sm text-gray-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-bold text-gray-800"
              >
                Email Address
              </label>

              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-xl border border-gray-200 bg-white/80 px-4 py-3.5 text-sm text-gray-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-bold text-gray-800"
              >
                Message
              </label>

              <textarea
                id="message"
                rows="5"
                placeholder="Write your message..."
                className="w-full resize-none rounded-xl border border-gray-200 bg-white/80 px-4 py-3.5 text-sm text-gray-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="rounded-xl bg-blue-600 px-7 py-3.5 text-sm font-bold text-white shadow-md transition duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-lg"
            >
              Send Message
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}

export default Article;