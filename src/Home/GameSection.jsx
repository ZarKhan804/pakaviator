
import {
  FaUserPlus,
  FaGamepad,
  FaGift,
  FaTrophy,
  FaWallet,
  FaMobileAlt,
} from "react-icons/fa";

function GameSection() {
  const features = [
    {
      icon: <FaUserPlus />,
      title: "Pak Aviator Account Guide",
      text: "Learn about account registration, login procedures, account security, and the information users should review before accessing a gaming platform.",
    },
    {
      icon: <FaGamepad />,
      title: "Aviator Gameplay & Rules",
      text: "Explore the basics of the Aviator crash game, including game rounds, multipliers, and how the gameplay works.",
    },
    {
      icon: <FaGift />,
      title: "Bonuses & Promotions",
      text: "Understand promotional offers, eligibility requirements, expiry dates, and applicable terms before using any advertised offer.",
    },
    {
      icon: <FaTrophy />,
      title: "Game Features & Results",
      text: "Learn about game features, multipliers, and round results. Outcomes can be unpredictable, and winning is never guaranteed.",
    },
    {
      icon: <FaWallet />,
      title: "Payments & Transactions",
      text: "Review general information about deposits, withdrawals, payment methods, processing times, and transaction security where applicable.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile Game Access",
      text: "Explore mobile access information, device compatibility, browser requirements, and safe app installation practices.",
    },
  ];

  return (
    <section
      aria-labelledby="pak-aviator-features-title"
      className="relative overflow-hidden bg-gray-200 py-16 sm:py-20 lg:py-8"
    >
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-120px] top-20 h-80 w-80 rounded-full bg-yellow-400/10 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-120px] right-[-100px] h-96 w-96 rounded-full bg-amber-400/10 blur-[130px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-300/5 blur-[150px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <header className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-yellow-700 shadow-sm backdrop-blur-sm">
            <FaTrophy className="text-sm" />
            Pak Aviator Game Features
          </div>

          <h2
            id="pak-aviator-features-title"
            className="text-3xl font-black tracking-tight text-gray-900 sm:text-4xl md:text-5xl"
          >
            Pak Aviator Game Features
            <span className="block bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 bg-clip-text text-transparent">
              Gameplay & Platform Information
            </span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-gray-600 sm:text-base">
            Explore Pak Aviator game information, gameplay rules, account
            access, mobile compatibility, payment guidance, and responsible
            gaming practices. Understand how crash games work before
            participating.
          </p>
        </header>

        {/* Features */}
        <div className="mx-auto mt-12 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-2xl border border-gray-300 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:shadow-lg"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400/15 text-xl text-yellow-600">
                {feature.icon}
              </div>

              <h3 className="text-lg font-extrabold text-gray-900 sm:text-xl">
                {feature.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-600">
                {feature.text}
              </p>
            </article>
          ))}
        </div>

        {/* Main Article */}
        <article className="mx-auto mt-12 max-w-5xl rounded-3xl border border-gray-300 bg-white/70 p-6 shadow-lg backdrop-blur-sm sm:p-8 lg:p-10">
          <div className="space-y-7 text-sm leading-7 text-gray-600 sm:text-base">
            <div>
              <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
                Pak Aviator Game Overview
              </h3>

              <p className="mt-3">
                Pak Aviator is a search term used for finding information
                about Aviator-style crash games and related gaming platforms.
                This guide introduces basic gameplay concepts, platform
                access information, mobile compatibility, and important
                considerations for users in Pakistan. Platform features and
                availability can vary by provider.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
                Pak Aviator Account Registration and Login
              </h3>

              <p className="mt-3">
                Users should review the relevant platform's registration
                instructions, account requirements, age restrictions, and
                terms before creating an account. Use a strong, unique
                password, protect personal information, and access accounts
                only through verified websites or applications.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
                How to Play the Aviator Crash Game
              </h3>

              <p className="mt-3">
                Aviator-style games commonly show a multiplier that increases
                during a round until the round ends. The specific rules,
                timing, and available controls depend on the game provider.
                Read the instructions carefully and remember that previous
                results do not guarantee future outcomes.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
                Pak Aviator Bonuses and Promotions
              </h3>

              <p className="mt-3">
                Some gaming platforms may advertise promotional offers or
                account bonuses. Availability and conditions vary. Review
                eligibility rules, wagering requirements, expiry dates, and
                withdrawal restrictions before accepting an offer. Never
                assume that a promotion guarantees a profit.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
                Payments, Deposits, and Withdrawals
              </h3>

              <p className="mt-3">
                Payment options and transaction procedures depend on the
                platform and the services available in your location. Before
                making a transaction, check the applicable fees, minimum
                amounts, processing times, identity verification requirements,
                and withdrawal terms. Never share your PIN, password, or
                payment verification codes.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
                Pak Aviator Mobile Access
              </h3>

              <p className="mt-3">
                Users looking for mobile access should check device
                compatibility, browser requirements, and whether an official
                application is available from a trusted source. Avoid
                downloading unknown APK files or granting unnecessary device
                permissions. Availability may vary across devices and regions.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
                Responsible Gaming and Safety
              </h3>

              <p className="mt-3">
                Crash games may involve financial risk and can lead to losses.
                Set personal limits, never gamble with borrowed money, and
                avoid chasing losses. Check local laws and age requirements
                before accessing any real-money gaming service. Do not treat
                gaming as a reliable way to earn income.
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default GameSection;

