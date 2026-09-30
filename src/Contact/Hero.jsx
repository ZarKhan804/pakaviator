
function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-50 px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-12">

      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-slate-200/60 blur-3xl" />

      <div className="relative mx-auto max-w-4xl text-center">

        <div className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-bold text-blue-600">
          Contact Pak Aviator
        </div>

        <h1 className="mt-5 text-4xl font-black leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
          Get in Touch With
          <span className="mt-2 block text-blue-600">
            Pak Aviator
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
          Have a question, suggestion, or feedback about Pak Aviator?
          Get in touch with us and share your message. This page provides
          a simple way to contact Pak Aviator regarding website content,
          general gaming information, and visitor inquiries.
        </p>

        <div className="mt-9 grid gap-4 sm:grid-cols-3">

          <div className="rounded-2xl border border-slate-200 bg-white px-6 py-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
            <p className="text-sm font-extrabold text-slate-900">
              General Questions
            </p>

            <p className="mt-1 text-xs leading-5 text-slate-500">
              Ask about our website and content.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white px-6 py-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
            <p className="text-sm font-extrabold text-slate-900">
              Feedback
            </p>

            <p className="mt-1 text-xs leading-5 text-slate-500">
              Share useful suggestions with us.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white px-6 py-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
            <p className="text-sm font-extrabold text-slate-900">
              Website Information
            </p>

            <p className="mt-1 text-xs leading-5 text-slate-500">
              Send us your general inquiry.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;

