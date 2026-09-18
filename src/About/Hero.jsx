function Hero() {
  return (
    <section className="relative overflow-hidden  bg-gradient-to-br from-slate-50 via-gray-100 to-blue-50 px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-6">

      {/* Background Shapes */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-slate-200/70 blur-3xl" />

      <div className="relative mx-auto max-w-4xl text-center">

        {/* Badge */}
        <div className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-bold text-blue-600">
          About Pak Aviator
        </div>

        {/* Heading */}
        <h1 className="mt-5 text-4xl font-black leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
          Everything You Need to Know About
          <span className="mt-2 block text-blue-600">
            Pak Aviator
          </span>
        </h1>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
          Pak Aviator is an informational website created to provide
          simple, clear and useful information about the Aviator game,
          gameplay concepts, mobile access, download guidance and helpful
          resources.
        </p>

        {/* Highlights */}
        <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">

          <div className="rounded-2xl border border-slate-200 bg-white px-6 py-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
            <p className="text-sm font-extrabold text-slate-900">
              Simple Information
            </p>
            <p className="mt-1 text-xs text-slate-500">
              Easy to understand
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white px-6 py-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
            <p className="text-sm font-extrabold text-slate-900">
              Useful Guides
            </p>
            <p className="mt-1 text-xs text-slate-500">
              Helpful resources
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white px-6 py-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
            <p className="text-sm font-extrabold text-slate-900">
              Mobile Friendly
            </p>
            <p className="mt-1 text-xs text-slate-500">
              Responsive experience
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;