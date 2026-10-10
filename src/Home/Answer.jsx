
import React, { useState } from "react";

const questions = [
  {
    q: "What Is Pak Aviator?",
    a: "Pak Aviator is a name commonly used for websites and platforms related to the Aviator-style crash game. The game generally features a rising multiplier that can stop unexpectedly. Always verify the platform you use and understand its rules before participating.",
  },
  {
    q: "How Does the Aviator Game Work?",
    a: "In a typical Aviator-style game, a multiplier rises from the starting value. Players must follow the platform's cash-out rules. The round can end at an unpredictable point, and a late cash-out may result in losing the stake.",
  },
  {
    q: "How Can I Access Pak Aviator?",
    a: "Use the official website address provided by the platform you intend to visit. Check the domain carefully, review its terms and conditions, and avoid links from unknown messages or suspicious advertisements.",
  },
  {
    q: "Is Pak Aviator Available in Pakistan?",
    a: "Availability depends on the specific platform, its operating policies, and applicable Pakistani laws. Check local legal requirements before accessing any real-money gaming service.",
  },
  {
    q: "How Do I Create an Account?",
    a: "If a platform lawfully offers registration, follow its official instructions, provide accurate information, and review its privacy policy and age requirements. Never submit personal documents to an unverified website.",
  },
  {
    q: "How Can I Log In to My Account?",
    a: "Visit the verified platform and use its official login page. Enter your registered credentials carefully. Never share your password, one-time verification code, or account recovery details with another person.",
  },
  {
    q: "What Should I Do If I Cannot Log In?",
    a: "Check your internet connection, confirm that your credentials are correct, and look for official account recovery instructions. If the problem continues, contact the platform through its verified support channel.",
  },
  {
    q: "Is There an Aviator App for Android?",
    a: "Some platforms may offer an Android application, while others may operate through a browser. Only consider downloads from a verified official source, check requested permissions, and avoid unknown APK files.",
  },
  {
    q: "Can I Play Aviator on an iPhone?",
    a: "Some Aviator-style platforms may support mobile browsers or iOS applications. Availability depends on the provider. Verify the source and compatibility before installing or accessing a service.",
  },
  {
    q: "Can I Play Aviator on a Computer?",
    a: "If the platform supports desktop browsers, you may be able to access it on a computer. Use an updated browser and a secure internet connection, and check the platform's compatibility information.",
  },
  {
    q: "Does Aviator Require a Fast Internet Connection?",
    a: "A stable connection helps pages and game interfaces load correctly. Slow internet, interruptions, or device problems can affect your experience. Check the platform's official records if a result or transaction appears incorrect.",
  },
  {
    q: "What Is a Multiplier in Aviator?",
    a: "A multiplier is a number that increases during a typical crash-game round. Its value is used to calculate the potential return according to the platform's rules. A higher multiplier does not mean a future round is more likely to reach that value.",
  },
  {
    q: "What Does Cash Out Mean?",
    a: "Cash out means requesting to end your participation in a round at the currently available multiplier. The final result depends on the platform's rules, timing, and whether the request is accepted before the round ends.",
  },
  {
    q: "Can Anyone Predict the Next Aviator Result?",
    a: "There is no reliable method that guarantees the next crash point. Previous rounds do not establish a dependable prediction of future outcomes. Be cautious of anyone selling guaranteed predictions or secret winning formulas.",
  },
  {
    q: "Are Aviator Signals Always Accurate?",
    a: "No signal provider can honestly guarantee every result. Signals shared through social media or messaging groups may be misleading, fabricated, or designed to collect money or personal information.",
  },
  {
    q: "Is There a Guaranteed Winning Strategy?",
    a: "No strategy can guarantee profits in a game with uncertain outcomes. Betting systems and multiplier patterns cannot eliminate risk. Never treat gaming as a reliable source of income.",
  },
  {
    q: "Does a Previous Round Affect the Next Round?",
    a: "A previous result alone does not reliably tell you what will happen next. Avoid assuming that a high or low multiplier must immediately be followed by its opposite.",
  },
  {
    q: "Can I Play Aviator for Free?",
    a: "Some providers may offer demonstrations or practice modes, but availability varies. Check whether a mode uses virtual credits or real money before starting, and read its conditions carefully.",
  },
  {
    q: "What Is the Difference Between Demo and Real Play?",
    a: "A demo mode generally uses virtual credits, while real-money participation may involve actual financial losses. Demo results do not guarantee similar outcomes in real-money play.",
  },
  {
    q: "How Do Deposits Work on Gaming Platforms?",
    a: "Deposit methods and conditions vary by provider. Before making a payment, verify the platform's identity, check applicable laws, read transaction fees and limits, and never send money to an unverified personal account.",
  },
  {
    q: "How Do Withdrawals Work?",
    a: "Withdrawal procedures depend on the platform's verification process, payment method, limits, and terms. Review these conditions before depositing money. Keep transaction records and contact official support if a payment is delayed.",
  },
  {
    q: "Why Is My Withdrawal Pending?",
    a: "A pending withdrawal may involve identity verification, processing times, payment-provider delays, or account reviews. Check the published withdrawal policy and contact verified support. Do not pay an unknown person an extra fee to release your funds.",
  },
  {
    q: "Is Pak Aviator Safe to Use?",
    a: "Safety depends on the exact website or application. Check its domain, ownership, security practices, privacy policy, and legal status. HTTPS alone does not prove that a platform is trustworthy.",
  },
  {
    q: "How Can I Identify a Fake Aviator Website?",
    a: "Look for misspelled domains, copied branding, unrealistic profit promises, suspicious payment requests, missing terms, and pressure to act quickly. Verify the provider independently before sharing information or making a payment.",
  },
  {
    q: "Can I Download Aviator From Any Website?",
    a: "Downloading from random websites is risky because files may contain malware or unwanted software. Use only a verified official source or a trusted app store listing, where available.",
  },
  {
    q: "What Should I Do If My Account Is Blocked?",
    a: "Review the platform's account policies and any notice explaining the restriction. Contact official support, provide only the requested information through verified channels, and keep records of your communications.",
  },
  {
    q: "How Can I Contact Customer Support?",
    a: "Look for a verified support page, official email address, or help center on the platform you use. Avoid support accounts that contact you unexpectedly and request your password, verification code, or payment.",
  },
  {
    q: "Can I Use Multiple Accounts?",
    a: "Account rules vary by platform. Some providers prohibit multiple accounts or may restrict accounts that violate their terms. Read the official policy and never create extra accounts to bypass a restriction.",
  },
  {
    q: "What Is Responsible Gaming?",
    a: "Responsible gaming means understanding the risks, setting strict limits, and never wagering money needed for food, education, bills, or other essentials. Take breaks, never chase losses, and stop if gaming causes stress or financial problems.",
  },
  {
    q: "Can I Earn a Regular Income From Aviator?",
    a: "Aviator-style crash games are unpredictable and can lead to financial losses. They should not be treated as a job, investment, or dependable source of income. The safest financial choice is not to risk money you cannot afford to lose.",
  },
];

const Answer = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [search, setSearch] = useState("");

  const filteredQuestions = questions.filter((item) =>
    `${item.q} ${item.a}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section
      id="answers"
      className="relative overflow-hidden bg-gray-200 px-4 py-16 text-gray-900 sm:px-6 sm:py-20 lg:px-8"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -left-32 top-32 h-72 w-72 rounded-full bg-yellow-300/30 blur-[100px]" />
      <div className="pointer-events-none absolute -right-32 bottom-20 h-72 w-72 rounded-full bg-amber-300/30 blur-[100px]" />

      <div className="relative mx-auto max-w-5xl">
        {/* Heading */}
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-amber-300 bg-yellow-100 px-4 py-2 text-xs font-bold uppercase tracking-[3px] text-amber-800 sm:text-sm">
            Pak Aviator Help Center
          </span>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl md:text-5xl">
            Pak Aviator{" "}
            <span className="bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
              Questions & Answers
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
            Find helpful answers to common questions about Pak Aviator,
            game rules, account access, mobile compatibility, security,
            payments, and responsible gaming.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mx-auto mb-8 max-w-2xl">
          <label htmlFor="aviator-search" className="sr-only">
            Search questions
          </label>

          <div className="flex items-center gap-3 rounded-2xl border border-gray-300 bg-white px-4 py-3 shadow-sm transition focus-within:border-amber-500 focus-within:ring-2 focus-within:ring-yellow-200">
            <svg
              className="h-5 w-5 shrink-0 text-amber-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m16 16 4 4" />
            </svg>

            <input
              id="aviator-search"
              type="search"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setOpenIndex(null);
              }}
              placeholder="Search your question here..."
              className="w-full bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-400 sm:text-base"
            />

            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                className="shrink-0 text-sm font-semibold text-amber-700 hover:text-amber-900"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Result Count */}
        <div className="mb-5 flex items-center justify-between gap-3">
          <p className="text-sm text-gray-600">
            Showing{" "}
            <span className="font-bold text-amber-700">
              {filteredQuestions.length}
            </span>{" "}
            of {questions.length} questions
          </p>

          {openIndex !== null && (
            <button
              type="button"
              onClick={() => setOpenIndex(null)}
              className="text-xs font-semibold text-gray-600 transition hover:text-amber-700 sm:text-sm"
            >
              Close answer
            </button>
          )}
        </div>

        {/* FAQ Questions */}
        <div className="space-y-3">
          {filteredQuestions.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <article
                key={item.q}
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "border-amber-400 bg-white shadow-lg shadow-amber-900/5"
                    : "border-gray-300 bg-white/80 hover:border-amber-400 hover:bg-white"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center gap-4 px-4 py-5 text-left sm:px-6"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-amber-200 bg-yellow-50 text-xs font-bold text-amber-700">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="flex-1 text-sm font-semibold leading-6 text-gray-800 sm:text-base">
                    {item.q}
                  </span>

                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-amber-200 text-lg text-amber-700 transition-transform duration-300 ${
                      isOpen ? "rotate-45 bg-yellow-100" : "bg-gray-50"
                    }`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                    <div className="ml-0 border-l-2 border-amber-400 pl-4 sm:ml-[52px]">
                      <p className="text-sm leading-7 text-gray-600 sm:text-base">
                        {item.a}
                      </p>
                    </div>
                  </div>
                )}
              </article>
            );
          })}

          {/* No Results */}
          {filteredQuestions.length === 0 && (
            <div className="rounded-2xl border border-gray-300 bg-white px-5 py-12 text-center shadow-sm">
              <h3 className="text-lg font-bold text-gray-900">
                No Questions Found
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Try another keyword to find the answer you need.
              </p>

              <button
                type="button"
                onClick={() => setSearch("")}
                className="mt-5 rounded-xl bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-500 px-5 py-2.5 text-sm font-bold text-black transition hover:brightness-95"
              >
                Show All Questions
              </button>
            </div>
          )}
        </div>

        {/* Help Section */}
        <div className="mt-10 rounded-2xl border border-amber-200 bg-white p-5 shadow-sm sm:p-7">
          <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
            Still Have a Question?
          </h3>

          <p className="mt-2 text-sm leading-7 text-gray-600">
            Review the official platform's terms, privacy policy, and support
            information for account-specific issues. Never trust guaranteed
            winning claims, and never risk money you cannot afford to lose.
          </p>
        </div>

        {/* Disclaimer */}
        <p className="mx-auto mt-7 max-w-3xl text-center text-xs leading-6 text-gray-500">
          Disclaimer: This page provides general educational information.
          It does not guarantee game outcomes, earnings, platform safety,
          or payment processing. Platform features and availability may vary.
          Follow applicable local laws and age restrictions.
        </p>
      </div>
    </section>
  );
};

export default Answer;
