
function DownloadHero() {
  const gameReferralLink =
    "https://pakaviator3.com/?code=ZMSJ653Y3V7&t=1789713107";

  const gameImage =
    "https://pakaviatorgame.com.pk/wp-content/uploads/2026/04/Pak-Aviator-1024x683.webp";

  return (
    <section
      aria-labelledby="download-title"
      className="relative overflow-hidden bg-gray-200"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-10%] top-0 h-[350px] w-[350px] rounded-full bg-yellow-400/20 blur-[120px]" />

        <div className="absolute bottom-[-10%] right-[-5%] h-[400px] w-[400px] rounded-full bg-amber-400/20 blur-[130px]" />
      </div>

      {/* Background Grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.25) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-10">

        {/* Game Image */}
        <div className="relative mx-auto mb-5 w-full max-w-5xl">
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 h-[220px] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/30 blur-[100px]"
          />

          <a
            href={gameReferralLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Access Pak Aviator gaming platform"
            className="relative z-10 block w-full"
          >
            <div className="relative overflow-hidden rounded-2xl border border-yellow-500/30 bg-white/70 p-2 shadow-2xl shadow-yellow-500/20 backdrop-blur-xl transition duration-300 hover:-translate-y-1 sm:rounded-3xl sm:p-3">
              <div className="relative h-[220px] overflow-hidden rounded-xl bg-gray-100 sm:h-[270px] md:h-[320px] lg:h-[360px] sm:rounded-2xl">
                <img
                  src={gameImage}
                  alt="Pak Aviator mobile gaming platform"
                  width="1200"
                  height="675"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
          </a>

          {/* Buttons Directly Under Image */}
          <div className="relative z-20 mt-5 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">

            {/* Download Now */}
            <a
              href={gameReferralLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Pak Aviator"
              className="inline-flex min-w-[180px] items-center justify-center rounded-xl bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-500 px-7 py-3.5 text-sm font-extrabold text-gray-900 shadow-lg shadow-yellow-500/25 transition duration-300 hover:-translate-y-1 hover:shadow-yellow-500/40"
            >
              Download Now
            </a>

            {/* Learn More - Dummy Button */}
            <button
              type="button"
              aria-label="Learn more about Pak Aviator"
              className="inline-flex min-w-[180px] items-center justify-center rounded-xl border border-gray-300 bg-white/80 px-7 py-3.5 text-sm font-bold text-gray-800 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:bg-yellow-50"
            >
              Learn More
            </button>

          </div>
        </div>

        {/* Download Information */}
        <div className="mx-auto max-w-5xl text-center">

          {/* Label */}
          <p className="mb-4 inline-flex rounded-full border border-yellow-500/30 bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-yellow-700 shadow-sm backdrop-blur-sm">
            Pak Aviator Download
          </p>

          {/* Main SEO Heading */}
          <h1
            id="download-title"
            className="text-4xl font-black leading-[1.08] tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Pak Aviator
            <span className="block bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 bg-clip-text text-transparent">
              Download & Mobile Access
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">
            Learn more about Pak Aviator mobile access and use the available
            platform link to continue on a compatible device. Explore the
            available features, account options, and platform information
            before getting started.
          </p>

          {/* Information Cards */}
          <div className="mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">

            <article className="rounded-2xl border border-gray-300/70 bg-white/70 p-5 text-left shadow-sm backdrop-blur-sm">
              <h2 className="text-sm font-extrabold text-gray-900">
                Mobile Gaming
              </h2>

              <p className="mt-2 text-xs leading-6 text-gray-500">
                Explore the Pak Aviator platform on compatible smartphones
                and mobile devices where the service is available.
              </p>
            </article>

            <article className="rounded-2xl border border-gray-300/70 bg-white/70 p-5 text-left shadow-sm backdrop-blur-sm">
              <h2 className="text-sm font-extrabold text-gray-900">
                Account Access
              </h2>

              <p className="mt-2 text-xs leading-6 text-gray-500">
                Keep your account credentials private and use trusted access
                methods when visiting the Pak Aviator platform.
              </p>
            </article>

            <article className="rounded-2xl border border-gray-300/70 bg-white/70 p-5 text-left shadow-sm backdrop-blur-sm">
              <h2 className="text-sm font-extrabold text-gray-900">
                Easy Navigation
              </h2>

              <p className="mt-2 text-xs leading-6 text-gray-500">
                Use the available platform sections to explore gaming options,
                account information, and other website resources.
              </p>
            </article>

          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-gray-200 to-transparent"
      />
    </section>
  );
}

export default DownloadHero;

