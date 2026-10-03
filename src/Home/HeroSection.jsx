
import { Link } from "react-router-dom";

function HeroSection() {
  const gameReferralLink =
    "https://pakaviator3.com/?code=ZMSJ653Y3V7&t=1789713107";

  const gameImage =
    "https://pakaviatorgame.com.pk/wp-content/uploads/2026/04/Pak-Aviator-1024x683.webp";

  return (
    <section
      aria-labelledby="pak-aviator-home-title"
      className="relative overflow-hidden bg-gray-200"
    >
      {/* BACKGROUND EFFECTS */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute left-[-10%] top-[5%] h-[400px] w-[400px] rounded-full bg-yellow-400/20 blur-[120px]" />

        <div className="absolute bottom-[-10%] right-[-5%] h-[450px] w-[450px] rounded-full bg-amber-400/20 blur-[130px]" />

        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-300/10 blur-[150px]" />
      </div>

      {/* BACKGROUND GRID */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.25) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* MAIN CONTENT */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
        {/* GAME IMAGE */}
        <div className="relative mx-auto mb-5 w-full max-w-5xl">
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 h-[260px] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/30 blur-[100px]"
          />

          <a
            href={gameReferralLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Pak Aviator game platform"
            className="relative z-10 block w-full"
          >
            <div className="relative overflow-hidden rounded-2xl border border-yellow-500/30 bg-white/70 p-2 shadow-2xl shadow-yellow-500/20 backdrop-blur-xl transition duration-300 hover:-translate-y-1 sm:rounded-3xl sm:p-3">
              <div className="relative h-[220px] overflow-hidden rounded-xl bg-gray-100 sm:h-[270px] md:h-[320px] lg:h-[360px] sm:rounded-2xl">
                <img
                  src={gameImage}
                  alt="Pak Aviator game and gameplay information"
                  width="1200"
                  height="675"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </a>

          {/* BUTTONS UNDER IMAGE */}
          <div className="relative z-20 mt-5 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
            {/* ACCESS BUTTON */}
            <a
              href={gameReferralLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Pak Aviator game platform"
              className="inline-flex min-w-[190px] items-center justify-center rounded-xl bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-500 px-7 py-3.5 text-sm font-extrabold text-gray-900 shadow-lg shadow-yellow-500/25 transition duration-300 hover:-translate-y-1 hover:shadow-yellow-500/40"
            >
              Play Pak Aviator
            </a>

            {/* ABOUT BUTTON */}
            <Link
              to="/about/"
              className="inline-flex min-w-[190px] items-center justify-center rounded-xl border border-gray-300 bg-white/80 px-7 py-3.5 text-sm font-bold text-gray-800 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:bg-yellow-50 hover:text-yellow-700"
            >
              About Pak Aviator
            </Link>
          </div>
        </div>

        {/* HOME INFORMATION */}
        <div className="mx-auto max-w-5xl text-center">
          {/* LABEL */}
          <p className="mb-4 inline-flex rounded-full border border-yellow-500/30 bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-yellow-700 shadow-sm backdrop-blur-sm">
            Pak Aviator Game Guide
          </p>

          {/* MAIN SEO HEADING */}
          <h1
            id="pak-aviator-home-title"
            className="text-4xl font-black leading-[1.08] tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Pak Aviator
            <span className="block bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 bg-clip-text text-transparent">
              Game Guide in Pakistan
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">
            Explore Pak Aviator game information, gameplay basics, mobile
            access, account registration guidance, platform features, and
            important tips for understanding online crash games. Learn how
            the game works and understand the risks before participating.
          </p>

          {/* INFORMATION CARDS */}
          <div className="mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
            {/* CARD 1 */}
            <article className="rounded-2xl border border-gray-300/70 bg-white/70 p-5 text-left shadow-sm backdrop-blur-sm">
              <h2 className="text-sm font-extrabold text-gray-900">
                Game Guide
              </h2>

              <p className="mt-2 text-xs leading-6 text-gray-500">
                Learn about Aviator gameplay, multipliers, game rounds, and
                the basic rules of crash-style games.
              </p>
            </article>

            {/* CARD 2 */}
            <article className="rounded-2xl border border-gray-300/70 bg-white/70 p-5 text-left shadow-sm backdrop-blur-sm">
              <h2 className="text-sm font-extrabold text-gray-900">
                Mobile Access
              </h2>

              <p className="mt-2 text-xs leading-6 text-gray-500">
                Read general information about mobile compatibility,
                browser access, and safe app installation practices.
              </p>
            </article>

            {/* CARD 3 */}
            <article className="rounded-2xl border border-gray-300/70 bg-white/70 p-5 text-left shadow-sm backdrop-blur-sm">
              <h2 className="text-sm font-extrabold text-gray-900">
                Safety Information
              </h2>

              <p className="mt-2 text-xs leading-6 text-gray-500">
                Understand financial risks, account security, platform
                terms, and responsible gaming practices.
              </p>
            </article>
          </div>
        </div>

        {/* SUPPORTING CONTENT */}
        <div className="mt-10">
          <div className="mx-auto max-w-5xl rounded-2xl border border-gray-300 bg-white/60 p-6 text-center shadow-sm backdrop-blur-sm sm:p-8">
            <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
              Pak Aviator Game Information and Guides
            </h2>

            <div className="mt-6 grid gap-3 text-left sm:grid-cols-2">
              {/* LEFT SIDE */}
              <div className="space-y-3 text-sm leading-6 text-gray-700">
                <p>1. Pak Aviator Game Guide 2026</p>
                <p>2. Pak Aviator Login and Registration Guide</p>
                <p>3. Pak Aviator App and Download Information</p>
                <p>4. How to Play the Aviator Crash Game</p>
                <p>5. Pak Aviator Game Features Explained</p>
                <p>6. Aviator Game Rules for Beginners</p>
                <p>7. Understanding Aviator Multipliers</p>
                <p>8. Pak Aviator Mobile Access Guide</p>
              </div>

              {/* RIGHT SIDE */}
              <div className="space-y-3 text-sm leading-6 text-gray-700">
                <p>9. Pak Aviator Account Security Tips</p>
                <p>10. Aviator Game Risks and Responsible Play</p>
                <p>11. Pak Aviator Website Access Guide</p>
                <p>12. Common Pak Aviator Login Problems</p>
                <p>13. Understanding Crash Game Results</p>
                <p>14. Pak Aviator Frequently Asked Questions</p>
                <p>15. Online Gaming Safety Tips in Pakistan</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM FADE */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-200 to-transparent"
      />
    </section>
  );
}

export default HeroSection;

